import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    if (pathname == '/discord') {
        return NextResponse.redirect(new URL('https://dsc.gg/rosemc', request.url))
    }
    if (pathname == '/github') {
        return NextResponse.redirect(new URL('https://github.com/hungnguyennaz/RoseBan', request.url))
    }
}