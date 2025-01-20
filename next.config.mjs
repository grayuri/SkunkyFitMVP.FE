/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.**.**.amazonaws.com",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "**.bodybuilding.com",
        pathname: "**"
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/lab/",
        destination: "/lab/nutrition/",
        permanent: true
      },
      {
        source: "/",
        destination: "/lab/nutrition/",
        permanent: true
      }
    ]
  }
};

export default nextConfig;
