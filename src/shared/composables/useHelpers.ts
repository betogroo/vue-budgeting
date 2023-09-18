const useHelpers = () => {
  const fetchData = (key: string) => {
    if (localStorage.getItem(key)) {
      return localStorage.getItem(key)
    } else {
      return null
    }
  }

  const deleteItem = (key: string) => {
    return localStorage.removeItem(key)
  }

  return { fetchData, deleteItem }
}

export default useHelpers
