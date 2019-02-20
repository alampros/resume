import React from 'react'
import {
  Switch,
} from 'evergreen-ui'
import useDarkMode from 'hooks/useDarkMode'

interface Props {
}

export default (passedProps: Props | any) => {
  const [darkMode, setDarkMode] = useDarkMode()
  return (
    <Switch
      checked={darkMode}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setDarkMode(e.target.checked)
      }}
      {...passedProps}
    />
  )
}
