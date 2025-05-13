import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname, search } = request.nextUrl;

    if (new Date() >= new Date("2025-05-14T15:30:00+09:00")) {
        return NextResponse.rewrite(new URL(pathname + search, "http://localhost:3000"));
    }
    return NextResponse.next();
}
