import * as React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from '@react-pdf/renderer'
import Section from './Section'
import Skill from './Skill'
import { ISkill } from 'data/Skill'
import SkillGroups from 'data/SkillGroups'

const styles = StyleSheet.create({
  skillGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 18,
  },
  groupTitle: {
    fontSize: 22,
    fontFamily: 'OpenSansLight',
    color: '#000',
    letterSpacing: -0.25,
    marginVertical: 12,
    borderBottom: '1pt solid #ccc',
  },
  skill: {
    marginRight: 18,
    marginBottom: 10,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 100,
  },
})

interface Props {
  skills: ISkill[]
}
export default ({ skills }: Props) => {
  const sortedSkills = skills.sort((a, b) => {
    if(a.strength === b.strength) return 0
    return b.strength - a.strength
  })
  const groupedSkills = new SkillGroups(sortedSkills).groups

  const $skillGroups = groupedSkills.map(({ title, skills }) => {
    if(skills.length === 0) return null
    return (
      <View key={title}>
        <Text style={styles.groupTitle}>{title}</Text>
        <View style={styles.skillGroup}>
          {skills.map(skill => (
            <Skill skill={skill} key={skill.id} style={styles.skill} />
          ))}
        </View>
      </View>
    )
  })
  return (
    <Section>
      {$skillGroups}
    </Section>
  )
}
