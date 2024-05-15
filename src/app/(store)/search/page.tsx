import { api } from '@/app/data/api'
import { Product } from '@/app/data/types/product'
import Image from 'next/image'
import Link from 'next/link'
import noResults from '../../../../public/Curious-rafiki.svg'
async function getProductsBySearch(search: string) {
  const response = await api(`/products/search?q=${search}`, {
    next: { revalidate: 60 * 60 },
  })
  const products = await response.json()
  return products
}

export default async function Search(props: any) {
  const searchText = props.searchParams.q
  const products =
    searchText !== '' ? await getProductsBySearch(searchText) : []
  return (
    <>
      <p className="text-sm">
        Resultados para: <strong>{searchText}</strong>
      </p>
      {products.length >= 1 ? (
        <div className="grid grid-cols-3 gap-6">
          {products.map((product: Product) => (
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
      ) : (
        <div className="grid place-items-center">
          <Image
            src={noResults}
            alt="Dois jovens confusos, com interrogações ao seu entorno"
            className="opacity-85 w-96"
          />
          <div className="w-[570px] flex flex-col items-center">
            <p className="font-bold text-4xl text-center text-violet-200">
              Nenhum resultado encontrado
            </p>
            <p className="font-medium mt-3 text-base w-[470px] text-center text-violet-200">
              Por favor, verifique se as palavras-chave estão corretas e tente
              novamente.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
