import * as React from 'react'
import ReactPDF, {
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer'
import DateRange from './DateRange'
import Project from './Project'
import { IJobDescriptor } from 'data/jobs/Job'
import sharedStyles from '../sharedStyles'

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    flexWrap: 'nowrap',
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
    fontSize: 22,
    fontFamily: 'RalewayExtraLight',
    color: '#000',
    marginVertical: 2,
  },
  dates: {
    fontSize: 10,
    lineHeight: 1.3,
    fontFamily: 'RobotoSlab',
    ...sharedStyles.dim,
  },
  description: {
    marginTop: 6,
    lineHeight: 1.4,
    paddingRight: 18,
  },
  skills: {
    flexDirection: 'row',
    fontSize: 10,
    marginTop: 6,
    fontFamily: 'RobotoSlab',
  },
  skillsLabel: {
    marginRight: 4,
  },
  skillsList: {
    flexShrink: 1,
    fontFamily: 'RobotoSlabLight',
    ...sharedStyles.dim,
  },
  projects: {
    paddingRight: 24,
    lineHeight: 1.4,
  },
  project: {
    marginLeft: 8,
    marginTop: 6,
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
    projects = [],
  } = job
  const skills = jobSkills
    .sort((a, b) => {
      if(a.relevance === b.relevance) return 0
      return b.relevance - a.relevance
    })
    .map(jobSkill => jobSkill.skill)
  const $projects = projects.map(project => (
    <Project key={project.description} project={project} style={styles.project} />
  ))
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
      {description && <Text style={styles.description}>{description}</Text>}
      {$projects.length > 0 && (
        <View style={styles.projects}>
          {$projects}
        </View>
      )}
      <View style={styles.skills}>
        <Text style={styles.skillsLabel}>Relevant Skills:</Text>
        <Text style={styles.skillsList} break={false}>{skills.map(skill => skill.name).join(', ')}</Text>
      </View>
    </View>
  )
}
