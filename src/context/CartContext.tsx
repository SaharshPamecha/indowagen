'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  type: 'product' | 'accessory';
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount - safely handling SSR
  useEffect(() => {
    // Only access localStorage in the browser environment
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
          const parsedCart = JSON.parse(savedCart);
          setItems(parsedCart);
        }
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        // If there's an error, ensure we have a clean state
        setItems([]);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes - safely handling SSR
  useEffect(() => {
    if (typeof window !== 'undefined' && items.length > 0) {
      try {
        localStorage.setItem('cart', JSON.stringify(items));
      } catch (error) {
        console.error('Error saving cart to localStorage:', error);
      }
    }
  }, [items]);

  const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentItems, { ...newItem, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = items
    .reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0)
    .toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  // Alias for addItem to make the API more intuitive
  const addToCart = addItem;

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        addToCart,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
