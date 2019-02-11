import * as React from 'react'
import ReactPDF, {
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer'
import DateRange from './DateRange'
import { IJobDescriptor } from 'data/jobs/Job'
import sharedStyles from '../sharedStyles'

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  company: {
    flexDirection: 'row',
    fontFamily: 'RobotoSlab',
    marginBottom: 1,
    fontSize: 10,
    ...sharedStyles.dim,
  },
  companyName: {
    color: '#222',
  },
  title: {
    fontSize: 20,
    fontFamily: 'RalewayExtraLight',
    paddingRight: 12,
    flex: 1,
  },
  dates: {
    fontSize: 10,
    lineHeight: 1.3,
  },
  description: {
    marginTop: 6,
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 10,
    marginTop: 6,
    justifyContent: 'flex-end',
    marginLeft: '25%',
  },
  skillsList: {
    flex: 1,
    ...sharedStyles.dim,
  },
})

const CompanySeparator = () => (
  <Text style={{ marginHorizontal: 4 }}>-</Text>
)

interface Props {
  job: IJobDescriptor
}

export default (props: Props & ReactPDF.ViewProps) => {
  const {
    job,
    style,
    ...passedProps
  } = props

  const {
    title,
    company,
    description,
    department,
    date,
    skills: jobSkills,
  } = job
  const skills = jobSkills
    .sort((a, b) => {
      if(a.relevance === b.relevance) return 0
      return b.relevance - a.relevance
    })
    .map(jobSkill => jobSkill.skill)
  return (
    <View style={{ ...style, ...styles.container }} {...passedProps} wrap={false}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'nowrap', alignItems: 'center' }}>
        <View style={styles.company}>
          <Text style={styles.companyName}>{company.name}</Text>
          <CompanySeparator />
          <Text>{department}</Text>
          <CompanySeparator />
          <Text>{`${company.address.city}, ${company.address.state}`}</Text>
        </View>
        <DateRange {...date} style={styles.dates} />
      </View>
      <Text style={styles.title}>{title}</Text>
      {description && <Text style={styles.description}>{description.html}</Text>}
      <View style={styles.skills}>
        <Text style={{ marginRight: 4 }}>Relevant Skills:</Text>
        <Text style={styles.skillsList}>{skills.map(skill => skill.name).join(', ')}</Text>
      </View>
    </View>
  )
}
