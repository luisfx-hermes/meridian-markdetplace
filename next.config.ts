import type { NextConfig } from "next";

const repoName = "meridian-markdetplace";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? `/${repoName}` : undefined,
};

export default nextConfig;
