import * as React from 'react'
import {
  View,
  Text,
} from '@react-pdf/renderer'
import Section from './Section'
import Skill from './Skill'
import { ISkill } from 'data/Skill'
import SkillGroups from 'data/SkillGroups'

const styles = {
  skillGroup: {
    flexDirection: 'row',
    flexWrap: true,
  },
  groupTitle: {
    fontSize: 22,
    fontFamily: 'RalewayExtraLight',
    color: '#000',
    marginVertical: 12,
  },
  skill: {
    marginRight: 18,
    marginBottom: 10,
    flex: 1,
    flexBasis: '20%',
  },
}

interface Props {
  skills: ISkill[]
}
export default ({ skills }: Props) => {
  const groupedSkills = new SkillGroups(skills).groups

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
