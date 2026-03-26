/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  allowedDevOrigins: ['192.168.55.103', 'localhost:3000'],
};

module.exports = nextConfig;
