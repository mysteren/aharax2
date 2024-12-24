import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [128, 384],
    minimumCacheTTL: 0,
    loader: 'custom',
    loaderFile: './src/shared/lib/image-loader.ts',
    formats: ['image/avif', 'image/webp'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '**.userapi.com',
    //   },
    // ],
  },
}

export default withPayload(nextConfig)

/**
 * module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}
module.exports = {
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
*/
