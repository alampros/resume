import * as path from 'path'

import * as React from 'react'
import ReactPDF from '@react-pdf/renderer'

import { IJobDescriptor } from 'data/Job'
import { skills } from 'data/skills'

import Resume from './components/Resume'

const defaultPath = path.resolve(__dirname, '../../static/resume-alampros.pdf')

const allSkills = Object.values(skills)
  .filter(s => {
    return s.meanRelevance >= 0.01
  })

export default (jobs: IJobDescriptor[], filePath: string = defaultPath) => {
  ReactPDF.render(<Resume jobs={jobs.slice(0, 5)} skills={allSkills} />, filePath)
}
