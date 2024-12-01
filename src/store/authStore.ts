import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const DEFAULT_USERNAME = 'admin';
const DEFAULT_PASSWORD = 'admin123';

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: (username: string, password: string) => {
    if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false }),
}));