import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ]
  }
};

export default nextConfig;
