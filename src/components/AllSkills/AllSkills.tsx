import React, { useContext, useState } from 'react'
import { IoIosSchool, IoIosTime } from 'react-icons/io'
import Toggle from 'react-toggle'

import SectionHeader from 'components/SectionHeader'
import { DateFilterContext } from 'contexts/DateFilterContext'
import { SkillsRelevanceContext } from 'contexts/SkillsRelevanceContext'
import { ISkill } from 'data/Skill'

import SkillsList from './SkillsList'

import 'components/ToggleDarkMode.css'
import * as styles from './AllSkills.module.css'

type ISortKey = 'yearsOfExperience' | 'strength'

type TProps = {
  skills: ISkill[]
}

const AllSkills: React.FC<TProps> = (props: TProps) => {
  const [sortBy, setSortBy] = useState('strength')
  const { from, to } = useContext(DateFilterContext)
  const relevance = useContext(SkillsRelevanceContext)
  const {
    skills = [],
  } = props
  if(!skills || !skills.length) {
    return null
  }
  const sortedSkills = skills
    .filter(s => {
      if(s.firstUsed && s.firstUsed > to) {
        return false
      }
      if(s.lastUsed && s.lastUsed < from) {
        return false
      }
      return true
    })
    .filter(s => {
      return s.relevance.code <= relevance.code &&
        s.relevance.systems <= relevance.systems &&
        s.relevance.ux <= relevance.ux
    })
    .sort((a, b) => {
      if(a.name === b.name) return 0
      return a.name.localeCompare(b.name)
    })
    .sort((a, b) => {
      if(a.interest === b.interest) return 0
      return b.interest - a.interest
    })
    .sort((a, b) => {
      const va = a[sortBy as ISortKey]
      const vb = b[sortBy as ISortKey]
      if(va === vb) return 0
      return vb - va
    })
  const iconStyles = {
    marginTop: '-4px',
    marginLeft: '-2px',
  }
  const $nav = (
    <span className={styles.headerContent}>
      <span>Skills</span>
      <nav>
        <label htmlFor="sort-toggle">Sort by</label>
        <Toggle
          id="sort-toggle"
          className="no-print"
          checked={sortBy === 'strength'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSortBy(e.target.checked ? 'strength' : 'yearsOfExperience')
          }}
          aria-label="Sort by"
          icons={{
            checked: <IoIosTime style={{ ...iconStyles }} />,
            unchecked: <IoIosSchool style={{ ...iconStyles }} />,
          }}
        />
      </nav>
    </span>
  )
  return (
    <SectionHeader title={$nav} className={styles.root}>
      <SkillsList skills={sortedSkills} />
    </SectionHeader>
  )
}

export default AllSkills
