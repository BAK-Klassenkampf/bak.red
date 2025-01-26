import { withPayload } from "@payloadcms/next/withPayload";
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    dynamicIO: false,
  },
};

export default withPayload(nextConfig);
