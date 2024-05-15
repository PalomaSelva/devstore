'use client'

import { useCart } from '@/contexts/cart-context'

export default function AddButton({ id }: { id: number }) {
  const { addToCart } = useCart()
  function handleAddProductToCart() {
    addToCart(id)
  }
  return (
    <button
      onClick={handleAddProductToCart}
      className="bg-emerald-500 rounded-full grid place-items-center h-12"
    >
      Adicionar ao carrinho
    </button>
  )
}
