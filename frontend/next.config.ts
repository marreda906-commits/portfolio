import type { NextConfig } from "next";

// GitHub Actions supplies /repository-name, or an empty string for a user site.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const customDistDir = process.env.NEXT_DIST_DIR;

const nextConfig: NextConfig = {
  output: "export",
  ...(customDistDir ? { distDir: customDistDir } : {}),
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
