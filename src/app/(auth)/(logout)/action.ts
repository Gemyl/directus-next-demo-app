"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function logoutAction() {
    const cookiesStore = await cookies();
    cookiesStore.delete(process.env.ACCESS_TOKEN_NAME as string);

    redirect("/login");
}