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
    marginTop: 14,
    marginRight: 14,
    flexBasis: '40%',
  },
  name: {
    fontSize: 16,
    fontFamily: 'RalewayLight',
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
      <Text style={{ fontSize: 9 }}>Strength: <Text style={{ fontFamily: 'RalewayBold' }}>{strength * 100}%</Text></Text>
      <View style={{ flexDirection: 'row', fontSize: 9 }}>
        <Text style={{ paddingRight: 3 }}>Experience: </Text>
        <ExperienceRating
          style={{ fontFamily: 'RalewayBold' }}
          labelProps={{ style: { fontFamily: 'Raleway' } }}
          yearsOfExperience={yearsOfExperience}
        />
      </View>
    </View>
  )
}
