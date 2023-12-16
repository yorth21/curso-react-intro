import { useState, useEffect } from "react"

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
        } else {
          setItem(JSON.parse(localStorageItem))
        }
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }, 2000)
  }, [initialValue, itemName])

  

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))

    setItem(newItem)
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage }