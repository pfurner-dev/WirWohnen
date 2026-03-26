import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : "standalone",
  basePath: isGithubPages ? "/WirWohnen" : "",
  images: {
    unoptimized: isGithubPages,
  },
};

export default nextConfig;
