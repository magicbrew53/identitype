/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            // TODO: tighten frame-ancestors to the final WordPress domain before launch
            value: "frame-ancestors 'self' https://*.identitypegroup.com https://identitypegroup.com *",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
