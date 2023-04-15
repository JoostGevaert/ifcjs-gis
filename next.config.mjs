/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "/bim-gis",
  basePath: "/bim-gis",
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
