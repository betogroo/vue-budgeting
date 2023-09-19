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

  const delay = (amount = 2000, msg = false): Promise<void> => {
    if (msg) {
      console.log(`Delay de ${amount / 1000} segundos para testes!`)
    }
    return new Promise((resolve) => setTimeout(resolve, amount))
  }

  return { fetchData, deleteItem, delay }
}

export default useHelpers
