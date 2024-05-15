import Header from '@/components/header'
import { CartProvider } from '@/contexts/cart-context'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className=" py-8 px-10 mx-auto w-full max-w-[1600px] min-h-screen text-gray-50 flex flex-col gap-5">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
