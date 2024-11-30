import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["www.hiacuity.com", "cdn.leonardo.ai", "img.freepik.com", "storage.googleapis.com"], // Add allowed domains here
  },
  // Other config options
};

export default nextConfig;
