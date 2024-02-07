const prod = process.env.NODE_ENV === 'production';
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    disable: !prod,
    skipWaiting: true,
});

/**
 * @see https://nextjs.org/docs/pages/api-reference/next-config-js
 * @type {{images: {remotePatterns: [{protocol: string, hostname: string, port: string, pathname: string},{protocol: string, hostname: string, port: string, pathname: string}]}, reactStrictMode: boolean}}
 */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'bk-nebula.s3.ap-northeast-1.amazonaws.com',
                pathname: '/my-bucket/**',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
                pathname: '/**',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
                pathname: '/**',
                port: '',
            },
        ],
    },
};

module.exports = withPWA(nextConfig);
