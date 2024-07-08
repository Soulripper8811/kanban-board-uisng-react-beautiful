/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Ensures the pattern matches HTTPS requests
        hostname: "randomuser.me", // Specifies the domain
      },
    ],
  },
};

export default nextConfig;
