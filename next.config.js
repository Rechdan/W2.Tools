/** @type {import('next').NextConfig} */

const nextConfig = {
  cleanDistDir: true,
  compiler: { styledComponents: true },
  output: "export",
  reactStrictMode: true,
  transpilePackages: ["antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker"],
};

module.exports = nextConfig;
