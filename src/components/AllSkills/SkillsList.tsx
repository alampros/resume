import React from 'react'
import { Pane } from 'evergreen-ui'
import posed, { PoseGroup } from 'react-pose'
import { ISkill } from 'data/Skill'
import Empty from './Empty'
import Skill from './Skill'
import SkillGroups from 'data/SkillGroups'

const RefPassedSkill = React.forwardRef((props, ref) => (
  <Skill innerRef={ref} {...props} />
))

const PosedSkill = posed(RefPassedSkill)({
  exit: {
    staggerChildren: 200,
    delayChildren: 500,
  },
  flip: {
    staggerChildren: 500,
    transition: {
      type: 'spring',
      stiffness: 170,
      damping: 15,
      mass: 1,
    },
  },
})

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
          alignContent="flex-end"
          marginRight="-1rem"
          marginBottom="2rem"
        >
          <PoseGroup animateOnMount>
            {skills.map(skill => <PosedSkill skill={skill} key={skill.id} />)}
          </PoseGroup>
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
