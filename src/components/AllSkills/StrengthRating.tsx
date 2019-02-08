import React from 'react'
import cx from 'classnames'
import { IoIosSchool } from 'react-icons/io'
import { Pane } from 'evergreen-ui'
import { ISkill } from 'data/Skill'

const styles = require('./StrengthRating.module.css')

type Props = Pick<ISkill, 'strength' | 'name'> & {
  className?: string
}

export default function StrengthRating({ strength, name, className, ...passedProps }: Props) {
  const cls = (() => {
    if(strength > 0.8) {
      return 'strong'
    }
    if(strength > 0.5) {
      return 'meh'
    }
    return 'stale'
  })()
  const title = `I arbitrarily rank my strength with ${name} at ${(strength * 10)}/10 `
  return (
    <Pane
      display="flex"
      alignItems="center"
      className={cx(className, styles.root, styles[cls])}
      {...passedProps}
    >
      <IoIosSchool />
      <progress
        max={1}
        value={strength}
        title={title}
        aria-role="figure"
        aria-label={title}
      >
        {strength}
      </progress>
    </Pane>
  )
}
