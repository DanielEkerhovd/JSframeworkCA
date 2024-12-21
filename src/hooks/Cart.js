import { create } from "zustand";
import { getLocalStorage, addLocalStorage } from "./handleStorage";

const loadCart = getLocalStorage("cart") || [];

export const useCart = create((set, get) => ({
  cart: loadCart,

  addToCart: (product) => {
    set((state) => {
      const storedItem = state.cart.find((item) => item.id == product.id);

      const updatedCart = storedItem
        ? state.cart.map((item) =>
            item.id === product.id ? { ...item, amount: item.amount + 1 } : item
          )
        : [...state.cart, { ...product, amount: 1 }];

      addLocalStorage("cart", updatedCart); // Save to localStorage

      return { cart: updatedCart };
    });
  },

  removeToCart: (product) => {
    set((state) => {
      const storedItem = state.cart.find((item) => item.id == product.id);

      let updatedCart = storedItem
        ? state.cart.map((item) =>
            item.id === product.id ? { ...item, amount: item.amount - 1 } : item
          )
        : [...state.cart, { ...product, amount: 0 }];

      // If the amount is 0, remove the item from the cart
      if (state.cart.find((item) => item.id == product.id).amount - 1 === 0) {
        updatedCart = state.cart.filter((item) => item.id !== product.id);
      }

      addLocalStorage("cart", updatedCart); // Save to localStorage

      return { cart: updatedCart };
    });
  },

  clearToCart: (product) => {
    set((state) => {
      const removedItem = state.cart.filter((item) => item.id !== product.id);

      addLocalStorage("cart", removedItem); // Save to localStorage

      return { cart: removedItem };
    });
  },

  // Get the total amount of the cart with .00 decimal
  getTotal: () => {
    const total = get().cart.reduce(
      (acc, item) => acc + item.discountedPrice * item.amount,
      0
    );
    return total.toFixed(2);
  },

  resetCart: () => {
    set({ cart: [] });
    addLocalStorage("cart", []);
  },
}));
