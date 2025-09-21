"use server";
import directus from "@/lib/directus";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function logoutAction() {
    const cookiesStore = await cookies();
    cookiesStore.delete("directus_access_token");

    directus.logout();
    redirect("/login");
}