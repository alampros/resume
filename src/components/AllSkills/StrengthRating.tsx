import React from 'react'
import cx from 'classnames'
import { IoIosSchool } from 'react-icons/io'
import { Pane } from 'evergreen-ui'

const styles = require('./StrengthRating.module.css')

interface Props {
  strength: number
  className?: string
}

function StrengthRating({ strength, className, ...passedProps }: Props) {
  const cls = (() => {
    if(strength > 0.8) {
      return 'strong'
    }
    if(strength > 0.5) {
      return 'meh'
    }
    return 'stale'
  })()
  return (
    <Pane
      display="flex"
      alignItems="center"
      className={cx(className, styles.root, styles[cls])}
      {...passedProps}
    >
      <IoIosSchool />
      <progress max={1} value={strength}>
        {strength}
      </progress>
    </Pane>
  )
}

export default StrengthRating
