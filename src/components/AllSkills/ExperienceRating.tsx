import React from 'react'
import { IoIosTime } from 'react-icons/io'
import { Pane } from 'evergreen-ui'
import { ISkill } from 'data/Skill'

type Props = any & Pick<ISkill, 'yearsOfExperience' | 'name'>

export default function ExperienceRating({ yearsOfExperience, name, ...passedProps }: Props) {
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
    <Pane
      display="flex"
      alignItems="center"
      role="presentation"
      aria-label={`I have ${years} ${plural} experience with ${name}`}
      {...passedProps}
    >
      <IoIosTime aria-hidden />
      <small
        title={`I have ${years} ${plural} experience with ${name}`}
        aria-hidden
        style={{ whiteSpace: 'nowrap' }}
      >
        <strong>{years}</strong> {plural}
      </small>
    </Pane>
  )
}
