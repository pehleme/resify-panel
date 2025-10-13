import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/reservas',
        statusCode: 302,
      },
    ]
  },
}

export default nextConfig
