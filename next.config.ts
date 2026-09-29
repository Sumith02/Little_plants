import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/category/pots-and-planters",
        destination: "/category/pots-planters",
        permanent: true,
      },
      {
        source: "/category/tools",
        destination: "/category/gardening-tools",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
