import * as path from 'path'
import * as React from 'react'
import { Font, Page, Document, StyleSheet } from '@react-pdf/renderer'
import { IJobDescriptor } from 'data/jobs/Job'
import { ISkill } from 'data/Skill'
import Jobs from './Jobs'
import Skills from './Skills'
import Header from './Header'
import Objective from './Objective'

Font.register(path.resolve(__dirname, '../fonts/Raleway/Raleway-Regular.ttf'), { family: 'Raleway' })
Font.register(path.resolve(__dirname, '../fonts/Raleway/Raleway-Light.ttf'), { family: 'RalewayLight' })
Font.register(path.resolve(__dirname, '../fonts/Raleway/Raleway-ExtraLight.ttf'), { family: 'RalewayExtraLight' })
Font.register(path.resolve(__dirname, '../fonts/Raleway/Raleway-Bold.ttf'), { family: 'RalewayBold' })
Font.register(path.resolve(__dirname, '../fonts/Roboto_Slab/RobotoSlab-Regular.ttf'), { family: 'RobotoSlab' })
Font.register(path.resolve(__dirname, '../fonts/Roboto_Slab/RobotoSlab-Light.ttf'), { family: 'RobotoSlabLight' })
Font.register(path.resolve(__dirname, '../fonts/Staatliches/Staatliches-Regular.ttf'), { family: 'Staatliches' })

// @ts-ignore
Font.registerHyphenationCallback(word => {
  return [word]
})

const styles = StyleSheet.create({
  page: {
    padding: 14,
    fontSize: 12,
    fontFamily: 'Raleway',
  },
})

interface Props {
  jobs: IJobDescriptor[]
  skills: ISkill[]
}

export default ({ jobs, skills }: Props) => {
  const keywords = skills.map(skill => skill.name).join(', ')
  return (
    <Document
      title="Resume of Aaron Lampros - User Experience Architect"
      author="Aaron Lampros"
      subject="Curriculum Vitae"
      keywords={keywords}
      creator="Aaron Lampros"
    >
      <Page size="A4" style={styles.page} wrap>
        <Header />
        <Objective />
        <Jobs jobs={jobs} />
        <Skills skills={skills} />
      </Page>
    </Document>
  )
}
