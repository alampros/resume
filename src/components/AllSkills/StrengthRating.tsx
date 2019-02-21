import React from 'react'
import cx from 'classnames'
import { IoIosSchool } from 'react-icons/io'
import { ISkill } from 'data/Skill'

const styles = require('./StrengthRating.module.css')

type Props = Pick<ISkill, 'strength' | 'name'> & React.HTMLProps<HTMLElement> & any

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
  const title = `I arbitrarily rank my strength with ${name} at ${(strength * 10)} out of 10`
  return (
    <div

      className={cx(className, styles.root, styles[cls])}
      role="presentation"
      aria-label={title}
      {...passedProps}
    >
      <IoIosSchool aria-hidden />
      <progress
        max={1}
        value={strength}
        title={title}
        aria-hidden
        className="no-print"
      >
        {strength}
      </progress>
      <span className={cx(styles.rating, 'no-screen')} aria-hidden>
        <strong>{strength * 100}</strong>%
      </span>
    </div>
  )
}
