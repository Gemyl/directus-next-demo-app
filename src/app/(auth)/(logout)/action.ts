"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import directus from "@/lib/directus";
import {logout} from "@directus/sdk";

export async function logoutAction() {
    const cookiesStore = await cookies();
    const refreshToken = cookiesStore.get(process.env.REFRESH_TOKEN_NAME as string)?.value || "";

    await directus.request(logout(refreshToken, "json"));

    cookiesStore.delete(process.env.ACCESS_TOKEN_NAME as string);
    cookiesStore.delete(process.env.REFRESH_TOKEN_NAME as string);

    redirect("/login");
}