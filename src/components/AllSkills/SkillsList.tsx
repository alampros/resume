import React from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import { ISkill } from 'data/Skill'
import Empty from './Empty'
import Skill from './Skill'
import SkillGroups from 'data/SkillGroups'

const styles = require('./SkillsList.module.css')

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
      <article key={title}>
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
          <div className={styles.skillsContainer}>
            {skills.map(skill => (
              <Flipped flipId={skill.id} key={skill.id} stagger>
                <Skill skill={skill} />
              </Flipped>
            ))}
          </div>
        </Flipper>
      </article>
    )
  })
  return <>{$skillGroups}</>
}
