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
    const $skills = skills.map(skill => (
      <Skill key={skill.id} skill={skill} />
    ))
    return (
      <Pane
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        overflow="hidden"
        alignContent="flex-end"
        marginRight="-0.5rem"
      >
        {$skills}
      </Pane>
    )
  }
}
