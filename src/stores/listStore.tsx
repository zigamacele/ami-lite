import { create } from 'zustand'

interface ListState {
  list: string[]
  showMyList: boolean
  updateList: (value: number) => void
  toggleMyList: (value: boolean) => void
}

const listUpdater = (array: string[], value: string) => {
  const newArray = [...array]
  if (!newArray.includes(value)) newArray.push(value)
  else newArray.splice(newArray.indexOf(value), 1)

  localStorage.setItem('list', newArray.toString())
  return newArray
}

export const useListState = create<ListState>()((set) => ({
  list: localStorage.list ? localStorage.list.split(',') : [],
  showMyList: true,
  updateList: (value: number) =>
    set((state) => ({
      list: listUpdater(state.list, value.toString()),
    })),
  toggleMyList: (value: boolean) =>
    set(() => ({
      showMyList: value,
    })),
}))
