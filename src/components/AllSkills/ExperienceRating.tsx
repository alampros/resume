import React from 'react'
import { IoIosTime } from 'react-icons/io'
import { Pane } from 'evergreen-ui'
import { ISkill } from 'data/Skill'

type Props = any & Pick<ISkill, 'yearsOfExperience'>

function ExperienceRating({ yearsOfExperience, ...passedProps }: Props) {
  return (
    <Pane
      display="flex"
      alignItems="center"
      {...passedProps}
    >
      <IoIosTime />
      <span>{yearsOfExperience}</span>
    </Pane>
  )
}

export default ExperienceRating
