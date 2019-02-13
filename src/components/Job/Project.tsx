import React from 'react'
import { IProject } from 'data/Project'
// const styles = require('./Job.module.css')

interface Props {
  project: IProject
}

export default class Project extends React.Component<Props> {
  render() {
    const {
      project,
    } = this.props
    const {
      // title,
      description,
      skills = [],
    } = project
    const $skills = skills.length > 0 ? (
      <small>{` (${skills.map(skill => skill.name).join(', ')})`}</small>
    ) : ''
    return (
      <li>
        {description || null}
        {$skills}
      </li>
    )
  }
}
