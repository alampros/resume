import * as React from 'react'
import {
  View,
} from '@react-pdf/renderer'
import Section from './Section'
import Skill from './Skill'
import { ISkill } from 'data/Skill'

const styles = {
  container: {
    flexDirection: 'row',
    flexWrap: true,
    justifyContent: 'space-around',
  },
}

interface Props {
  skills: ISkill[]
}
export default ({ skills }: Props) => {
  const $skills = skills
    .sort((a, b) => {
      if(a.strength === b.strength) return 0
      return b.strength - a.strength
    })
    .map(skill => (
      <Skill key={skill.name} skill={skill} />
    ))
  return (
    <Section title="All Skills">
      <View style={styles.container}>
        {$skills}
      </View>
    </Section>
  )
}
