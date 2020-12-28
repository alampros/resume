/**
 * A modified version of Gabe Ragland's excellent `useMedia` hook from
 * https://usehooks.com/useMedia/ with type annotations and SSR precautions.
 *
 * MIT licensed: https://github.com/gragland/usehooks/blob/master/LICENSE
 */

import { useCallback, useEffect, useState } from 'react'

export default <T>(queries: string[], values: T[], defaultValue: T): T => {
  // Array containing a media query list for each query
  const mediaQueryLists = typeof window !== 'undefined' ? queries.map(q => window.matchMedia(q)) : []

  // Function that gets value based on matching media query
  const getValue = useCallback(() => {
    // Get index of first media query that matches
    const index = mediaQueryLists.findIndex(mql => mql.matches)
    // Return related value or defaultValue if none
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue
  }, [defaultValue, mediaQueryLists, values])

  // State and setter for matched value
  const [value, setValue] = useState(getValue)

  useEffect(
    () => {
      if(typeof window === 'undefined') return
      // Event listener callback
      // Note: By defining getValue outside of useEffect we ensure that it has
      // current values of hook args (as this hook callback is created once on
      // mount).
      const handler = () => setValue(getValue)
      // Set a listener for each media query with above handler as callback.
      mediaQueryLists.forEach(mql => mql.addListener(handler))
      // Remove listeners on cleanup
      return () => mediaQueryLists.forEach(mql => mql.removeListener(handler))
    },
    [getValue, mediaQueryLists] // Empty array ensures effect is only run on mount and unmount
  )

  return value
}
