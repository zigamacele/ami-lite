const useLocalStorage = () => {
  const clearStorage = (key: string) => {
    localStorage.removeItem(key)
  }
  const setStorage = (key: string, value: string) => {
    localStorage.setItem(key, value)
  }
  const getStorage = (key: string) => {
    return localStorage.getItem(key)
  }

  const updateStorage = (key: string, value: string) => {
    const storage = getStorage(key)
    if (storage) {
      const currentStorage = storage.split(',')
      if (!currentStorage.includes(value)) currentStorage.push(value)
      else currentStorage.splice(currentStorage.indexOf(value), 1)
      setStorage(key, currentStorage.toString())
    } else setStorage(key, value)
  }

  return { clearStorage, updateStorage, getStorage }
}

export default useLocalStorage
