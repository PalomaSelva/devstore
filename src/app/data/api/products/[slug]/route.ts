import { z } from 'zod'
import data from '../data.json'

interface otherParams {
  params: {
    slug: string
  }
}

export async function GET(_: Request, other: otherParams) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const slug = z.string().parse(other.params.slug)
  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return Response.json(
      {
        message: 'Product not found',
      },
      {
        status: 400,
      },
    )
  }
  return Response.json(product)
}
