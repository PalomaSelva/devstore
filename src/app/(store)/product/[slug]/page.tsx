import Image from 'next/image'
import { Metadata } from 'next'
import { api } from '@/app/data/api'
import { Product } from '@/app/data/types/product'
import AddButton from '@/components/add-button'

interface ProductProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const product = await response.json()

  return product
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: product.title,
  }
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug)
  const valorParcelado = (product.price / 12).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  const tamanhos = ['PP', 'P', 'M', 'G', 'GG']
  return (
    <div className="relative grid h-[85vh] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          className="mx-auto"
          src={product.image}
          alt=""
          width={820}
          height={820}
          quality={100}
        />
      </div>

      <div className="flex flex-col gap-8 justify-center pr-12">
        <div>
          <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

          <p className=" leading-relaxed text-zinc-400">
            {product.description}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            Em até 12x s/ juros de {valorParcelado}
          </span>
        </div>

        <div className="space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            {tamanhos.map((tamanho, index) => (
              <button
                key={index}
                type="button"
                className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
              >
                {tamanho}
              </button>
            ))}
          </div>
        </div>

        <AddButton id={product.id} />
      </div>
    </div>
  )
}
