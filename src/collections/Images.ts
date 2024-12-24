import path from 'path'
import type { CollectionConfig } from 'payload'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Images: CollectionConfig = {
  slug: 'images',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    staticDir: path.resolve(dirname, '../../public/uploads/images'),
    adminThumbnail: '384',
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
    formatOptions: {
      format: 'webp',
      options: { quality: 85 },
    },
    imageSizes: [
      // {
      //   name: '16',
      //   width: 16,
      // },

      // {
      //   name: '32',
      //   width: 32,
      //   formatOptions: {
      //     format: 'webp',
      //     options: { quality: 30 },
      //   },
      // },
      // {
      //   name: '48',
      //   width: 48,
      // },
      // {
      //   name: '64',
      //   width: 64,
      // },
      // {
      //   name: '96',
      //   width: 96,
      //   formatOptions: {
      //     format: 'webp',
      //     options: { quality: 60 },
      //   },
      // },
      {
        name: '128',
        width: 128,
        formatOptions: {
          format: 'webp',
          options: { quality: 60 },
        },
      },
      // {
      //   name: '256',
      //   width: 256,
      // },
      {
        name: '384',
        width: 384,
        formatOptions: {
          format: 'webp',
          options: { quality: 60 },
        },
      },

      {
        name: '640',
        width: 640,
        formatOptions: {
          format: 'webp',
          options: { quality: 80 },
        },
      },
      {
        name: '750',
        width: 750,
        formatOptions: {
          format: 'webp',
          options: { quality: 81 },
        },
      },
      {
        name: '828',
        width: 828,
        formatOptions: {
          format: 'webp',
          options: { quality: 81 },
        },
      },
      {
        name: '1080',
        width: 1080,
        formatOptions: {
          format: 'webp',
          options: { quality: 82 },
        },
      },
      {
        name: '1200',
        width: 1200,
        formatOptions: {
          format: 'webp',
          options: { quality: 82 },
        },
      },
      {
        name: '1920',
        width: 1920,
        formatOptions: {
          format: 'webp',
          options: { quality: 84 },
        },
      },
      // {
      //   name: '2048',
      //   width: 2048,
      // },
      // {
      //   name: '3840',
      //   width: 3840,
      // },
    ],
  },
}

/**
 * module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}


images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 96, 384],
    minimumCacheTTL: 0,
    loader: 'custom',
    loaderFile: './src/lib/image-loader.ts',
    formats: ['image/avif', 'image/webp'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '**.userapi.com',
    //   },
    // ],
    
  },
module.exports = {
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}




 */
