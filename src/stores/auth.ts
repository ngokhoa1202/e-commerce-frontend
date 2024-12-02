import { create } from 'zustand'

export type AuthState = {
  userId: string
  accessToken: string
  refreshToken: string
}

export type AuthActions = {
  setUserId: (userId: string) => void
  setAccessToken: (accessToken: string) => void
  setRefreshToken: (refreshToken: string) => void
}

export type AuthStore = AuthState & AuthActions

export const initialState: AuthState = {
  userId: '',
  accessToken: '',
  refreshToken: '',
}

export const useAuthStore = create<AuthStore>((set) => ({
  ...initialState,
  setUserId: (userId: string) => set({ userId }),
  setAccessToken: (accessToken: string) => set({ accessToken }),
  setRefreshToken: (refreshToken: string) => set({ refreshToken }),
}));
