import type { TCartItem } from "@customTypes/cart";

const CART_STORAGE_KEY = "cart";

export function loadCart(): TCartItem[] {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCart(items: TCartItem[]) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // storage may be unavailable (private browsing, quota) — cart just won't persist
  }
}
