import directus from '@/lib/directus';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {AuthenticationData} from "@directus/sdk";
import {NextURL} from "next/dist/server/web/next-url";
import {ReadonlyRequestCookies} from "next/dist/server/web/spec-extension/adapters/request-cookies";

export async function POST(request: NextRequest): Promise<NextResponse<unknown>> {
    const formData: FormData = await request.formData();
    const cookiesStore: ReadonlyRequestCookies = await cookies();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    try {
        const credentials: AuthenticationData = await directus.login(email, password, {mode: "json"});
        cookiesStore.set(process.env.ACCESS_TOKEN_NAME as string, String(credentials.access_token), {
            maxAge: credentials.expires as number / 1000
        });
        cookiesStore.set(process.env.REFRESH_TOKEN_NAME as string, String(credentials.refresh_token), {
            path: '/'
        })

        const url: NextURL = request.nextUrl.clone();
        url.pathname = "/"
        return NextResponse.redirect(url);

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Registration failed" }, { status: 500 });
    }
}