/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "unoloft.com" }],
        destination: "https://www.unoloft.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
