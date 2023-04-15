/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/home",
  output: "export",
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
