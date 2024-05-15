'use client'
import { useCart } from '@/contexts/cart-context'
import { ShoppingBag } from 'lucide-react'

export default function Cart() {
  const { items } = useCart()
  return (
    <button className="flex items-center gap-2">
      <ShoppingBag size={20} />
      <span className="text-sm">Cart({items.length})</span>
    </button>
  )
}
