import type { NextConfig } from "next";
<<<<<<< HEAD

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
=======
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
});

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export default withSerwist(nextConfig);
>>>>>>> 6d8c2a5b4716c4e1ec28fd841fb832a75ffd5ae6
