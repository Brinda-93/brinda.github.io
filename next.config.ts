/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  trailingSlash: true, // Fixes some routing issues
};

module.exports = nextConfig;
