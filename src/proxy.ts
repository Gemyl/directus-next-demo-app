import { NextRequest, NextResponse } from "next/server";
import directus from "@/lib/directus";
import {AuthenticationData, refresh} from "@directus/sdk";
import {cookies} from "next/headers";
import {ReadonlyRequestCookies} from "next/dist/server/web/spec-extension/adapters/request-cookies";

export async function proxy(request: NextRequest): Promise<NextResponse<unknown>> {
    const accessToken: string = request.cookies.get(process.env.ACCESS_TOKEN_NAME as string)?.value || "";
    const refreshToken: string = request.cookies.get(process.env.REFRESH_TOKEN_NAME as string)?.value || "";

    if(!accessToken) {
        try {
            console.log("Refreshing access token");
            const newCredentials: AuthenticationData = await directus.request(refresh("json", refreshToken));
            const cookiesStore: ReadonlyRequestCookies = await cookies();

            const nextResponse: NextResponse<unknown> = NextResponse.next({
                request: {
                    headers: new Headers(request.headers)
                }
            });

            // headers forwarding, so the new token can be access by server functions
            nextResponse.headers.set("cookie", `${process.env.ACCESS_TOKEN_NAME as string}=${newCredentials.access_token}`);

            // updating access and refresh tokens cookies value
            cookiesStore.set(process.env.ACCESS_TOKEN_NAME as string, newCredentials.access_token as string, { maxAge: newCredentials.expires as number / 1000});
            cookiesStore.set(process.env.REFRESH_TOKEN_NAME as string, newCredentials.refresh_token as string, { path: '/' });

            console.log("Access token successfully refreshed");

            return nextResponse;

        } catch (error) {
            console.log('[TokenExpired] Failed to refresh access token. Redirecting...');
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        // ! Check excludes on live
        "/((?!api|_next/static|_next/image|favicon.ico|login).*)",
    ]
};
