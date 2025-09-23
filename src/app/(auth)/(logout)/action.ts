"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function logoutAction() {
    const cookiesStore = await cookies();
    cookiesStore.delete("directus_access_token");

    redirect("/login");
}