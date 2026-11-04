import { execSync } from "node:child_process";
import type { NextConfig } from "next";

function gitSha() {
  try {
    return execSync("git rev-parse --short HEAD").toString().trim();
  } catch {
    return "dev";
  }
}

const nextConfig: NextConfig = {
  output: "standalone",
  agentRules: false,
  cacheComponents: true,
  partialPrefetching: true,
  env: {
    BUILD_SHA: gitSha(),
    BUILD_DATE: new Date().toISOString().slice(0, 10),
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
