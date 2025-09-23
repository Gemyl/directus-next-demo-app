import directus from '@/lib/directus';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
    const formData = await request.formData();
    const cookiesStore = await cookies();

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    try {
        const credentials = await directus.login(email, password, {mode: "json"});
        cookiesStore.set(process.env.ACCESS_TOKEN_NAME as string, String(credentials.access_token));

        const url = request.nextUrl.clone();
        url.pathname = "/"
        return NextResponse.redirect(url);

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Registration failed" }, { status: 500 });
    }
}