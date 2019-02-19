import React, { useState } from 'react'
import {
  Pane,
  SegmentedControl,
  Small,
} from 'evergreen-ui'
import { ISkill } from 'data/Skill'
import SkillsList from './SkillsList'

const styles = require('./AllSkills.module.css')

type ISortKey = 'yearsOfExperience' | 'strength'

interface ISortMenuOptions {
  label: string
  value: ISortKey
}
const sortOptions: ISortMenuOptions[] = [
  {
    label: 'Experience',
    value: 'yearsOfExperience',
  },
  {
    label: 'Strength',
    value: 'strength',
  },
]

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
      const va = a[sortBy as ISortKey]
      const vb = b[sortBy as ISortKey]
      if(va === vb) return 0
      return vb - va
    })
  return (
    <section className={styles.root}>
      <Pane
        is="header"
        marginBottom="0.5rem"
      >
        <h2>Skills</h2>
        <hr aria-hidden />
        <Pane
          is="nav"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-end"
          className="no-print"
        >
          <Pane display="flex" flex-direction="row" align-items="center">
            <Small is="label" htmlFor="sortBy" marginRight="0.5rem">Sort By:</Small>
            <SegmentedControl
              name="sortby"
              width={180}
              height={24}
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
              role="group"
              aria-label="Sort By"
            />
          </Pane>
        </Pane>
      </Pane>
      <SkillsList skills={sortedSkills} />
    </section>
  )
}

AllSkills.defaultProps = {
  skills: [],
}

export default AllSkills
