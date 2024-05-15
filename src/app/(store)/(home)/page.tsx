import { api } from '@/app/data/api'
import { Product } from '@/app/data/types/product'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60,
    },
  })

  const products = await response.json()

  return products
}

export default async function Home() {
  const [hightlightProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[82vh] grid-cols-3 grid-rows-2 gap-4">
      <Link
        href={`/product/${hightlightProduct.slug}`}
        className="group col-span-2 row-span-2 rounded-lg bg-zinc-900 overflow-hidden relative"
      >
        <Image
          src={hightlightProduct.image}
          width={880}
          height={880}
          quality={100}
          alt=""
          className="group-hover:scale-110 transition-transform duration-300 mx-auto "
        />
        <div className="absolute bottom-28 right-28 h-12 max-w-[280px] flex items-center gap-2 border-2 border-zinc-500 rounded-full bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{hightlightProduct.title}</span>
          <div className="rounded-full bg-violet-500 h-full px-3 py-1.5 font-semibold">
            {hightlightProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </div>
        </div>
      </Link>
      {otherProducts.map((product: Product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group relative col-span-1 row-span-1 rounded-lg  bg-zinc-900 overflow-hidden"
        >
          <Image
            src={product.image}
            alt=""
            width={345}
            height={345}
            quality={100}
            className="group-hover:scale-110 transition-transform duration-300 mx-auto"
          />
          <div className="absolute bottom-8 right-28 h-12 max-w-[240px] flex items-center gap-2 border-2 border-zinc-500 rounded-full bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">{product.title}</span>
            <div className="rounded-full bg-violet-500 h-full px-3 py-1.5 font-semibold">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
