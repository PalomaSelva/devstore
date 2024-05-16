import { api } from '@/app/data/api'
import { Product } from '@/app/data/types/product'
import { ImageResponse } from 'next/og'
import { env } from '@/env'
import colors from 'tailwindcss/colors'

// Image metadata
export const alt = ''
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getProductBySlug(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: { revalidate: 60 * 60 },
  })

  const product = await response.json()

  return product
}

// Image generation
export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProductBySlug(params.slug)
  const productImageURL = new URL(product.image, env.APP_URL).toString()
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={productImageURL} alt="" />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [],
    },
  )
}
