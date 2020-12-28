import React from 'react'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'
import Toggle, { ToggleProps } from 'react-toggle'

import useDarkMode from 'hooks/useDarkMode'

import './ToggleDarkMode.css'

export const ToggleDarkMode: React.FC<ToggleProps> = (passedProps: ToggleProps) => {
  const [darkMode, setDarkMode] = useDarkMode()
  const iconStyles = {
    marginTop: '-4px',
    marginLeft: '-2px',
  }
  return (
    <Toggle
      className="no-print"
      checked={darkMode}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setDarkMode(e.target.checked)
      }}
      aria-hidden
      icons={{
        checked: <IoIosSunny style={{ ...iconStyles }} />,
        unchecked: <IoIosMoon style={{ ...iconStyles }} />,
      }}
      {...passedProps}
    />
  )
}

export default ToggleDarkMode
