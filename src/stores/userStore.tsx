import { create } from 'zustand'

interface ListState {
  username: string
  platform: boolean
  updateUsername: (value: string) => void
  updatePlatform: (value: boolean) => void
}

const updateUsernameStorage = (value: string) => {
  localStorage.setItem('username', value)
  return value
}

const updatePlatformStorage = (value: boolean) => {
  localStorage.setItem('platform', value.toString())
  return value
}

export const useUserState = create<ListState>()((set) => ({
  username: localStorage.username ?? '',
  platform: localStorage.platform ? JSON.parse(localStorage.platform) : false,
  updateUsername: (value: string) =>
    set(() => ({
      username: updateUsernameStorage(value),
    })),
  updatePlatform: (value: boolean) =>
    set(() => ({
      platform: updatePlatformStorage(value),
    })),
}))
