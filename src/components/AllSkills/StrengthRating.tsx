import React from 'react'
import { IoIosSchool } from 'react-icons/io'
import clsx from 'clsx'

import { ISkill } from 'data/Skill'

import styles from './StrengthRating.module.css'

type TProps = Pick<ISkill, 'strength' | 'name'> & React.HTMLProps<HTMLDivElement>

export const StrengthRating: React.FC<TProps> = ({ strength, name, className, ...passedProps }: TProps) => {
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
      className={clsx(className, styles.root, styles[cls])}
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
      <span className={clsx(styles.rating, 'no-screen')} aria-hidden>
        <strong>{strength * 100}</strong>%
      </span>
    </div>
  )
}

export default StrengthRating
