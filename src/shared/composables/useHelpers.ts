const useHelpers = () => {
  const fetchData = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || '{}')
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
