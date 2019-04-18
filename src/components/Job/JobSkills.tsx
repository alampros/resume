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
        if(b.relevance && a.relevance) {
          return b.relevance - a.relevance
        }
        if(a.relevance && !b.relevance) {
          return 1
        }
        if(!a.relevance && b.relevance) {
          return -1
        }
        return 0
      })
      .map(skill => (
        <li key={skill.skill.id}>
          <JobSkill
            className={styles.skill}
            {...skill}
          />

        </li>
      ))
    if(skills.length) {
      return (
        <section className={styles.root}>
          <h4>Skills Leveraged:</h4>
          <ul>
            {$skills}
          </ul>
        </section>
      )
    }
    return null
  }
}
