'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setCartItems((cartItems: CartItem[]) => {
      const productInCart = cartItems.some(
        (cartItem: CartItem) => cartItem.productId === productId,
      )
      if (productInCart) {
        return cartItems.map((cartItem) => {
          if (productId === cartItem.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 }
          } else {
            return cartItem
          }
        })
      } else {
        return [...cartItems, { productId, quantity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
