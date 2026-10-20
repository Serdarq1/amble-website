import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // iOS fetches this file to learn which appamble.com links open the app.
  // It has no extension, so the JSON type has to be set by hand.
  headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;
