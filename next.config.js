/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/app',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/app/all',
        basePath: false,
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
