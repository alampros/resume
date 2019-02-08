import React from 'react'
import { IJobSkill } from 'data/Skill'
import Skill from 'components/Skill'
const styles = require('./Skills.module.css')

interface Props {
  skills: IJobSkill[]
}

export default class Skills extends React.Component<Props> {
  render() {
    const {
      skills,
    } = this.props
    const $skills = skills
      .sort((a, b) => {
        return b.relevance - a.relevance
      })
      .map(skill => (
        <Skill
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
