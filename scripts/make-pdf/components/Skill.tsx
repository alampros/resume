import * as React from 'react'
import ReactPDF, {
  Text,
  View,
  Link,
  StyleSheet,
} from '@react-pdf/renderer'
import ExperienceRating from './ExperienceRating'
import { ISkill } from 'data/Skill'

const styles = StyleSheet.create({
  container: {
  },
  name: {
    fontSize: 14,
    lineHeight: 1.1,
    marginBottom: 4,
    fontFamily: 'RobotoSlab',
    color: 'inherit',
    textDecoration: 'none',
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
      {link ? (
        <Link style={styles.name} src={link.toString()}>{name}</Link>
      ) : (
        <Text style={styles.name}>{name}</Text>
      )}
      <View style={{ fontSize: 8 }}>
        <Text>Strength: <Text style={{ fontFamily: 'RalewayBold' }}>{strength * 100}%</Text></Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ paddingRight: 3 }}>Experience: </Text>
          <ExperienceRating
            style={{ fontFamily: 'RalewayBold' }}
            labelProps={{ style: { fontFamily: 'Raleway' } }}
            yearsOfExperience={yearsOfExperience}
          />
        </View>
      </View>
    </View>
  )
}
