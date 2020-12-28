/**
 * A modified version of Gabe Ragland's excellent `useLocalStorage` hook from
 * https://usehooks.com/useLocalStorage/ with type annotations and SSR
 * precautions.
 *
 * MIT licensed: https://github.com/gragland/usehooks/blob/master/LICENSE
 */
import { useState } from 'react'

export default function useLocalStorage<T>(key: string, initialValue?: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if(typeof window === 'undefined') return initialValue
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch(error) {
      // If error also return initialValue
      console.error(error)
      return initialValue
    }
  })
  // Return a wrapped version of useState's setter function that persists the
  // new value to localStorage.
  const setValue: (_value: (_v: T) => T | T) => void = (value) => {
    if(typeof window === 'undefined') return
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch(error) {
      // A more advanced implementation would handle the error case
      console.error(error)
    }
  }

  return [storedValue, setValue]
}
