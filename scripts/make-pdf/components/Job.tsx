import * as React from 'react'
import ReactPDF, {
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'

import { IJobDescriptor } from 'data/Job'

import sharedStyles from '../sharedStyles'

import DateRange from './DateRange'
import Project from './Project'

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    flexWrap: 'nowrap',
    borderTop: '1pt solid #ccc',
    paddingTop: 6,
  },
  company: {
    flexDirection: 'row',
    fontFamily: 'RobotoSlab',
    fontSize: 10,
    ...sharedStyles.dim,
  },
  companyName: {
    color: '#222',
  },
  title: {
    fontSize: 20,
    fontFamily: 'OpenSansLight',
    color: '#000',
    marginVertical: 0,
  },
  dates: {
    fontSize: 10,
    lineHeight: 1.3,
    fontFamily: 'RobotoSlab',
    ...sharedStyles.dim,
  },
  description: {
    marginBottom: 4,
    lineHeight: 1.4,
    paddingRight: 18,
    fontSize: 10,
  },
  projects: {
    paddingRight: 24,
    lineHeight: 1.4,
    fontSize: 10,
  },
  project: {
    marginLeft: 8,
    marginBottom: 6,
  },
  skills: {
    flexDirection: 'row',
    fontSize: 10,
    fontFamily: 'RobotoSlab',
  },
  skillsLabel: {
    marginRight: 4,
  },
  skillsList: {
    flex: 1,
    fontFamily: 'RobotoSlabLight',
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
    projects = [],
  } = job
  const skills = jobSkills
    .sort((a, b) => {
      const hasA = typeof a.relevance !== 'undefined'
      const hasB = typeof b.relevance !== 'undefined'
      if(hasA && !hasB) return -1
      if(!hasA && hasB) return 1
      // TS doesn't want to recognize the guard if I use `hasA`/`hasB` here for some reason...
      if(typeof a.relevance !== 'undefined' && typeof b.relevance !== 'undefined') {
        if(a.relevance === b.relevance) return 0
        return b.relevance - a.relevance
      }
      return 0
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
        <Text style={styles.skillsList}>{skills.map(skill => skill.name).join(', ')}</Text>
      </View>
    </View>
  )
}
