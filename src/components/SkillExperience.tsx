import React from 'react'
import { ISkill } from 'data/Skill'

type Props = Pick<ISkill, 'yearsOfExperience'>

export default class SkillExperience extends React.Component<Props & React.HTMLProps<HTMLDivElement>> {
  render() {
    const {
      yearsOfExperience,
      ...passedProps
    } = this.props
    // TODO: Handle pluralization
    return (
      <div {...passedProps}>
        <strong>{yearsOfExperience}</strong> yrs experience
      </div>
    )
  }
}
