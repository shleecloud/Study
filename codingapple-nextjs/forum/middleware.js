import {NextResponse} from 'next/server';
import {getToken} from 'next-auth/jwt';

export async function middleware(req) {
    // console.log(req.nextUrl.pathname);

    const token = await getToken({req, secret: process.env.OAUTH_GITHUB_CUSTOM_SECRET});
    if (!token && req.nextUrl.pathname.startsWith('/write')) {
        return NextResponse.redirect('http://localhost:3000/api/auth/signin');
    }

    if (req.nextUrl.pathname.startsWith('/list')) {
        console.log(req.headers.get('sec-ch-ua-platform'));
    }

    return NextResponse.next();
}
