import * as path from 'path'
import * as React from 'react'
import { Font, Page, Document, StyleSheet } from '@react-pdf/renderer'
import { IJobDescriptor } from 'data/Job'
import { ISkill } from 'data/Skill'
import Jobs from './Jobs'
import Skills from './Skills'
import Header from './Header'

Font.register({ src: path.resolve(__dirname, '../fonts/Roboto_Slab/RobotoSlab-Regular.ttf'), family: 'RobotoSlab', fontStyle: 'normal', fontWeight: 'normal' })
Font.register({ src: path.resolve(__dirname, '../fonts/Roboto_Slab/RobotoSlab-Light.ttf'), family: 'RobotoSlabLight', fontStyle: 'normal', fontWeight: 'light' })
Font.register({ src: path.resolve(__dirname, '../fonts/Open_Sans/OpenSans-Light.ttf'), family: 'OpenSansLight', fontStyle: 'normal', fontWeight: 'light' })
Font.register({ src: path.resolve(__dirname, '../fonts/Open_Sans/OpenSans-Regular.ttf'), family: 'OpenSans', fontStyle: 'normal', fontWeight: 'normal' })
Font.register({ src: path.resolve(__dirname, '../fonts/Open_Sans/OpenSans-SemiBold.ttf'), family: 'OpenSansSemiBold', fontStyle: 'normal', fontWeight: 'semibold' })
Font.register({ src: path.resolve(__dirname, '../fonts/Open_Sans/OpenSans-Bold.ttf'), family: 'OpenSansBold', fontStyle: 'normal', fontWeight: 'bold' })

// @ts-ignore
Font.registerHyphenationCallback(word => {
  return [word]
})

const styles = StyleSheet.create({
  page: {
    padding: 14,
    fontSize: 12,
    fontFamily: 'OpenSansLight',
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
        <Jobs jobs={jobs} />
        <Skills skills={skills} />
      </Page>
    </Document>
  )
}
