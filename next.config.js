/**
 * @type {import('next').NextConfig}
 */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "/";

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  experimental: {
    appDir: true,
  },
  basePath: basePath,
  assetPrefix: assetPrefix,
  // images: {
  //   loader: "imgix",
  //   path: 'the "domain" of your Imigix source',
  // },
};

module.exports = nextConfig
