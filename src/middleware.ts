import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const authorizationToken: string = request.cookies.get(process.env.ACCESS_TOKEN_NAME as string)?.value || "";
    
    if(!authorizationToken) {
        console.log("[NotAuthorized] Redirecting...")
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        // ! Check excludes on live
        "/((?!api|_next/static|_next/image|favicon.ico|login).*)",
    ]
};
