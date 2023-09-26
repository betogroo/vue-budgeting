const useHelpers = () => {
  const fetchData = (key: string) => {
    const data = JSON.parse(localStorage.getItem(key) || '{}')
    if (!Object.keys(data).length) return null
    return data
  }

  const existingData = (key: string) => {
    const data = fetchData(key)
    return data
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

  const generateRandomColor = () => {
    const countBudgets = fetchData('budgets')?.length ?? 0
    return `${countBudgets * 34}, 65%, 50%`
  }

  const localCurrency = (data: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(data)
  }

  const timestampToDate = (date: number) =>
    new Date(date).toLocaleDateString('pt-BR')

  return {
    fetchData,
    existingData,
    deleteItem,
    delay,
    generateRandomColor,
    localCurrency,
    timestampToDate,
  }
}

export default useHelpers
