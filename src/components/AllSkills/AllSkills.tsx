import React, { useState } from 'react'
import Toggle from 'react-toggle'
import { ISkill } from 'data/Skill'
import { IoIosTime, IoIosSchool } from 'react-icons/io'
import SkillsList from './SkillsList'

const styles = require('./AllSkills.module.css')

type ISortKey = 'yearsOfExperience' | 'strength'

interface Props {
  skills: ISkill[]
}

function AllSkills(props: Props) {
  const [sortBy, setSortBy] = useState('strength')
  const {
    skills,
  } = props
  if(!skills || !skills.length) {
    return null
  }
  const sortedSkills = skills
    .sort((a, b) => {
      if(a.name === b.name) return 0
      return a.name.localeCompare(b.name)
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
  return (
    <section className={styles.root}>
      <header>
        <h2>Skills</h2>
        <hr aria-hidden />
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
      </header>
      <SkillsList skills={sortedSkills} />
    </section>
  )
}

AllSkills.defaultProps = {
  skills: [],
}

export default AllSkills
