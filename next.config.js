/** @type {import('next').NextConfig} */

const nextConfig = {
  cleanDistDir: true,
  compiler: { styledComponents: true },
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;
