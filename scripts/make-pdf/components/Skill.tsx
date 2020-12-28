import * as React from 'react'
import ReactPDF, {
  Link,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'

import { ISkill } from 'data/Skill'

import ExperienceRating from './ExperienceRating'

const styles = StyleSheet.create({
  container: {
  },
  name: {
    lineHeight: 1.1,
    marginBottom: 4,
    fontFamily: 'RobotoSlab',
    color: 'inherit',
    textDecoration: undefined,
  },
})

interface Props {
  skill: ISkill
}

export default (props: Props & ReactPDF.ViewProps) => {
  const {
    skill,
    style,
    ...passedProps
  } = props

  const {
    name,
    strength,
    yearsOfExperience,
    link,
  } = skill
  return (
    <View style={{ ...style, ...styles.container }} {...passedProps}>
      {link
        ? <Link style={styles.name} src={link.toString()}>{name}</Link>
        : <Text style={styles.name}>{name}</Text>}
      <View style={{ fontSize: 8 }}>
        <Text>Strength: <Text style={{ fontFamily: 'OpenSansSemiBold' }}>{strength * 100}%</Text></Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ paddingRight: 3 }}>Experience: </Text>
          <ExperienceRating
            style={{ fontFamily: 'OpenSansSemiBold' }}
            labelProps={{ style: { fontFamily: 'OpenSans' } }}
            yearsOfExperience={yearsOfExperience}
          />
        </View>
      </View>
    </View>
  )
}
