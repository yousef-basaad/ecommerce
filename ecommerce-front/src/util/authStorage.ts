import type { TAuthUser } from "@customTypes/user";

const AUTH_STORAGE_KEY = "auth_user";

export function loadUser(): TAuthUser | null {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveUser(user: TAuthUser | null) {
  try {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  } catch {
    // storage may be unavailable (private browsing, quota) — session just won't persist
  }
}
