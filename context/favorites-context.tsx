"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type FavoriteItem = {
  id: string
  name: string
  price: number
  image: string
  category?: string
  [key: string]: any
}

type FavoritesContextType = {
  favorites: FavoriteItem[]
  addFavorite: (item: FavoriteItem) => void
  removeFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("favorites")
    if (stored) {
      try {
        setFavorites(JSON.parse(stored))
      } catch {
        localStorage.removeItem("favorites")
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = (item: FavoriteItem) => {
    setFavorites((prev) => (prev.find((f) => f.id === item.id) ? prev : [...prev, item]))
  }

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id))
  }

  const isFavorite = (id: string) => favorites.some((f) => f.id === id)

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) throw new Error("useFavorites must be used within a FavoritesProvider")
  return context
} 