import React from 'react'
import { Pane } from 'evergreen-ui'
import { ISkill } from 'data/Skill'
import Empty from './Empty'
import Skill from './Skill'
import SkillGroups from 'data/SkillGroups'

interface Props {
  skills: ISkill[]
}

export default (props: Props) => {
  const {
    skills,
  } = props
  if(!skills || !skills.length) {
    return <Empty />
  }

  const groupedSkills = new SkillGroups(skills).groups

  const $skillGroups = groupedSkills.map(({ title, skills }) => {
    if(skills.length === 0) return null
    return (
      <Pane key={title}>
        <h3>{title}</h3>
        <Pane
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          overflow="hidden"
          alignContent="flex-end"
          marginRight="-1rem"
          marginBottom="2rem"
        >
          {skills.map(skill => <Skill skill={skill} key={skill.id} />)}
        </Pane>
      </Pane>
    )
  })
  return (
    <Pane>
      {$skillGroups}
    </Pane>
  )
}
