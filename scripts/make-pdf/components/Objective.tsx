import * as React from 'react'
import { Text } from '@react-pdf/renderer'
import ResumeMetadata from 'data/ResumeMetadata'
import Section from './Section'

export default () => {
  return (
    <Section title="Objective" style={{ marginBottom: 24 }}>
      <Text>{ResumeMetadata.objective}</Text>
    </Section>
  )
}
