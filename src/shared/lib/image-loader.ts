import { ImageLoaderProps } from 'next/image'

export default function BaseImageLoader({ src, width }: ImageLoaderProps): string {
  return src.replace('/images/', `/images-resize/${width}/`) + '.webp'
}

export function BasePreviewImageLoader(src: string): string {
  const width = 96
  return src.replace('/images/', `/images-resize/${width}/`) + '.webp'
}
