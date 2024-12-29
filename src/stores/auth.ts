import { createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';

export type AuthState = {
  userId: string
  accessToken: string
  refreshToken: string
  isAuthed: boolean
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
  isAuthed: false,
};

export const authStore = createStore<AuthStore>()(
  persist(
    (set) => ({
      ...initialState,
      setUserId: (userId: string) => set({ userId }),
      setAccessToken: (accessToken: string) => {
        const token = accessToken ? `Bearer ${accessToken}` : '';
        set(() => ({ accessToken: token, isAuthed: !!accessToken }));
      },
      setRefreshToken: (refreshToken: string) => set({ refreshToken }),
    }),
    { name: 'auth-storage' },
  ),
);
