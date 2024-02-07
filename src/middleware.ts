import {authMiddleware} from '@clerk/nextjs';
import {NextResponse} from 'next/server';

export default authMiddleware({
    async afterAuth() {
        return NextResponse.next();
    },
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
