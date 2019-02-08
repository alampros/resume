import React from 'react'
import { IJobSkill } from 'data/Skill'
import JobSkill from 'components/Job/JobSkill'
const styles = require('./JobSkills.module.css')

interface Props {
  skills: IJobSkill[]
}

export default class JobSkills extends React.Component<Props> {
  render() {
    const {
      skills,
    } = this.props
    const $skills = skills
      .sort((a, b) => {
        return b.relevance - a.relevance
      })
      .map(skill => (
        <JobSkill
          key={skill.skill.id}
          className={styles.skill}
          {...skill}
        />
      ))
    if(skills.length) {
      return (
        <section className={styles.root}>
          <h4>Skills Leveraged:</h4>
          {$skills}
        </section>
      )
    }
    return null
  }
}
