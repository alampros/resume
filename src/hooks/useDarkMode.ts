/**
 * A modified version of Gabe Ragland's excellent `useDarkMode` hook from
 * https://usehooks.com/useDarkMode/ with type annotations and SSR precautions.
 *
 * MIT licensed: https://github.com/gragland/usehooks/blob/master/LICENSE
 */
import { useEffect } from 'react'

import useLocalStorage from './useLocalStorage'
import useMedia from './useMedia'

export default function useDarkMode(): [boolean, (enabled: boolean) => void] {
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled')
  const prefersDarkMode = usePrefersDarkMode()
  const enabled = typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode
  useEffect(
    () => {
      if(typeof window === 'undefined') return
      const className = 'dark-mode'
      const element = window.document.body
      if(enabled) {
        element.classList.add(className)
      } else {
        element.classList.remove(className)
      }
    },
    [enabled]
  )
  return [enabled, setEnabledState]
}

function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false)
}
