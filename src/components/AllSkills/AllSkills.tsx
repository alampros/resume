import * as React from 'react'
import { ISkill } from 'data/Skill';
import SkillsList from './SkillsList';

interface Props {
  skills: ISkill[]
}

export default class AllSkills extends React.Component<Props> {
  static defaultProps = {
    skills: [],
  }
  render() {
    const {
      skills,
    } = this.props
    if(!skills || !skills.length) {
        return null
    }
    return (
      <section>
        <h2>All Skills</h2>
        <SkillsList skills={skills} />
      </section>
    )
  }
}
