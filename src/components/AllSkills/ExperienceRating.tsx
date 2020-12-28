import React from 'react'
import { IoIosTime } from 'react-icons/io'
import cx from 'classnames'

import { ISkill } from 'data/Skill'

import styles from './ExperienceRating.module.css'

type TProps = any & Pick<ISkill, 'yearsOfExperience' | 'name'>

export const ExperienceRating: React.FC<TProps> = ({ yearsOfExperience, name, className, ...passedProps }: TProps) => {
  const plural = yearsOfExperience > 1 ? 'years' : 'year'
  const change = yearsOfExperience % 1
  const bits = (() => {
    if(!change) return ''
    if(change === 0.5) return '½'
    if(change === 0.25) return '¼'
    if(change === 0.75) return '¾'
    return change.toFixed(1).slice(1)
  })()
  const years = yearsOfExperience < 1 ? bits : Math.floor(yearsOfExperience) + bits
  return (
    <div
      className={cx(className, styles.root)}
      role="presentation"
      aria-label={`I have ${years} ${plural} experience with ${name}`}
      {...passedProps}
    >
      <IoIosTime aria-hidden />
      <small
        title={`I have ${years} ${plural} experience with ${name}`}
        aria-hidden
      >
        <strong>{years}</strong> {plural}
      </small>
    </div>
  )
}

export default ExperienceRating
