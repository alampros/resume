import * as React from 'react'
import { Pane } from 'evergreen-ui'
import { ISkill } from 'data/Skill'
import Empty from './Empty'
import Skill from './Skill'

interface Props {
  skills: ISkill[]
}

export default class SkillsList extends React.Component<Props> {
  static defaultProps = {
    skills: [],
  }
  render() {
    const {
      skills,
    } = this.props
    if(!skills || !skills.length) {
      return <Empty />
    }

    const groupedSkills = [
      {
        title: 'What I really like doing now',
        skills: skills.filter(({ interest }) => interest >= 0.7),
      },
      {
        title: 'What I can do',
        skills: skills.filter(({ interest }) => (
          interest < 0.7 && interest >= 0.3
        )),
      },
      {
        title: 'What I can do for enough money',
        skills: skills.filter(({ interest }) => (
          interest >= 0.1 && interest < 0.3
        )),
      },
      {
        title: 'What I won\'t do again',
        skills: skills.filter(({ interest }) => (
          !interest || interest < 0.1
        )),
      },
    ]

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
            marginRight="-0.5rem"
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
}
