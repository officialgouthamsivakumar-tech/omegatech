import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.baykon.com" },
      { protocol: "https", hostname: "www.endeavourkenya.co.ke" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "www.oiml.org" },
      { protocol: "https", hostname: "www.kebs.org" },
    ],
  },
};

export default nextConfig;
