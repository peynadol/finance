import type { NextConfig } from "next";

const nextConfig = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    return config;
  },
};

export default nextConfig;
