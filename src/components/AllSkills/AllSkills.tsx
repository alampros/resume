import React, { useState } from 'react'
import {
  Pane,
  SearchInput,
  SegmentedControl,
  Small,
} from 'evergreen-ui'
import Fuse from 'fuse.js'
import { ISkill } from 'data/Skill'
import SkillsList from './SkillsList'

const styles = require('./AllSkills.module.css')

interface Props {
  skills: ISkill[]
}

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

function AllSkills(props: Props) {
  const [filterStr, setFilterStr] = useState('')
  const [sortBy, setSortBy] = useState('strength')
  const {
    skills,
  } = props
  const fuse = new Fuse(skills, {
    shouldSort: true,
    threshold: 0.2,
    location: 0,
    distance: 10,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      'name',
    ],
  })
  if(!skills || !skills.length) {
    return null
  }
  const filteredSkills = (filterStr === '' ? skills : fuse.search(filterStr))
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
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        marginBottom="0.5rem"
      >
        <h2>All Skills</h2>
        <Pane is="nav" display="flex" flexDirection="column" justifyContent="flex-end" alignItems="flex-end">
          <SearchInput
            aria-label="Filter Skills"
            marginBottom="0.5rem"
            value={filterStr}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              return setFilterStr(e.currentTarget.value)
            }}
          />
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
      <SkillsList skills={filteredSkills} />
    </section>
  )
}

AllSkills.defaultProps = {
  skills: [],
}

export default AllSkills
