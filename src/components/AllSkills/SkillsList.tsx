import React from 'react'
import { Pane } from 'evergreen-ui'
import { Flipper, Flipped } from 'react-flip-toolkit'
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
      <Pane
        key={title}
        is="article"
      >
        <h3>{title}</h3>
        <Flipper
          flipKey={skills.map(skill => skill.id).join('')}
          spring="gentle"
          staggerConfig={{
            default: {
              speed: 0.2,
              reverse: true,
            },
          }}
        >
          <Pane
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            alignContent="flex-end"
            marginRight="-1rem"
            marginBottom="2rem"
            style={{
              pageBreakInside: 'avoid',
            }}
          >
            {skills.map(skill => (
              <Flipped flipId={skill.id} key={skill.id} stagger>
                <Skill skill={skill} />
              </Flipped>
            ))}
          </Pane>
        </Flipper>
      </Pane>
    )
  })
  return (
    <Pane>
      {$skillGroups}
    </Pane>
  )
}
