"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useAuth } from "./auth-context"
import type { CartItem } from "./cart-context"

export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled"

export type Order = {
  id: string
  items: CartItem[]
  totalPrice: number
  status: OrderStatus
  createdAt: string
  address: string
  paymentMethod: string
  trackingNumber?: string
}

type OrderContextType = {
  orders: Order[]
  addOrder: (order: Omit<Order, "id" | "createdAt">) => string
  getOrder: (id: string) => Order | undefined
  cancelOrder: (id: string) => void
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([])
  const { isLoggedIn } = useAuth()

  // 初始化时从localStorage加载订单数据
  useEffect(() => {
    if (isLoggedIn) {
      const storedOrders = localStorage.getItem("orders")
      if (storedOrders) {
        try {
          setOrders(JSON.parse(storedOrders))
        } catch (e) {
          console.error("Failed to parse stored orders", e)
          localStorage.removeItem("orders")
        }
      }
    } else {
      setOrders([])
    }
  }, [isLoggedIn])

  // 当订单更新时，保存到localStorage
  useEffect(() => {
    if (isLoggedIn && orders.length > 0) {
      localStorage.setItem("orders", JSON.stringify(orders))
    }
  }, [orders, isLoggedIn])

  const addOrder = (orderData: Omit<Order, "id" | "createdAt">) => {
    const id = `order-${Date.now()}-${Math.floor(Math.random() * 1000)}`
    const newOrder: Order = {
      ...orderData,
      id,
      createdAt: new Date().toISOString(),
    }

    setOrders((prevOrders) => [...prevOrders, newOrder])
    return id
  }

  const getOrder = (id: string) => {
    return orders.find((order) => order.id === id)
  }

  const cancelOrder = (id: string) => {
    setOrders((prevOrders) => prevOrders.map((order) => (order.id === id ? { ...order, status: "cancelled" } : order)))
  }

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        getOrder,
        cancelOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  const context = useContext(OrderContext)
  if (context === undefined) {
    throw new Error("useOrder must be used within an OrderProvider")
  }
  return context
}
