import React, { useContext } from 'react'
import { Flipped, Flipper } from 'react-flip-toolkit'
import { useTheme } from '@material-ui/core'

import { InformationDensityContext } from 'contexts/InformationDensityContext'
import { ISkill } from 'data/Skill'
import SkillGroups from 'data/SkillGroups'

import Empty from './Empty'
import Skill from './Skill'

import * as styles from './SkillsList.module.css'

interface TProps {
  skills: ISkill[]
}

export const SkillsList: React.FC<TProps> = (props: TProps) => {
  const { density } = useContext(InformationDensityContext)
  const theme = useTheme()
  const {
    skills,
  } = props
  if(!skills || !skills.length) {
    return <Empty />
  }

  if(density === 'sparse') {
    return (
      <Flipper
        flipKey={skills.map(skill => skill.id).join('')}
        spring="stiff"
        staggerConfig={{
          default: {
            speed: 0.2,
          },
        }}
      >
        <article className={styles.skillsContainer}>

          {skills.map(skill => (
            <Flipped flipId={skill.id} key={skill.id} stagger>
              <Skill skill={skill} />
            </Flipped>
          ))}
        </article>
      </Flipper>
    )
  }

  const groupedSkills = new SkillGroups(skills).groups

  const $skillGroups = groupedSkills.map(({ title, skills }) => {
    if(skills.length === 0) return null
    return (
      <article key={title}>
        <h3 className={styles.heading} style={{ top: theme.mixins.toolbar.minHeight }}>{title}</h3>
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

export default SkillsList
