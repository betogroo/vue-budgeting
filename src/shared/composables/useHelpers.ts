const useHelpers = () => {
  const fetchData = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || '{}')
  }

  return { fetchData }
}

export default useHelpers
