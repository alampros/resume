import Job, { IJobConstructorParam } from './Job'
import { IMarkdownNode } from 'data/GatsbyTypes'
import skills from 'data/skills'

const jobs: IJobConstructorParam[] = [
  {
    title: 'User Experience Architect',
    companyId: 'roundtable',
    descriptionId: 'roundtable_01',
    date: {
      start: new Date('2018-05-14T12:00:00.000Z'),
    },
    skills: [
      { skill: skills.js, importance: 0.9 },
    ],
  },
  {
    title: 'Product Designer',
    companyId: 'dealertire',
    descriptionId: 'dealertire_01',
    date: {
      start: new Date('2017-11-01T12:00:00.000Z'),
      end: new Date('2018-05-11T22:00:00.000Z'),
    },
  },
  {
    title: 'Technology Architect – User Experience',
    companyId: 'dealertire',
    descriptionId: 'dealertire_02',
    date: {
      start: new Date('2012-02-01T12:00:00.000Z'),
      end: new Date('2017-08-01T22:00:00.000Z'),
    },
  },
  {
    title: 'Web Designer, R&D Developer, Technology Evaluator',
    companyId: 'dealertire',
    descriptionId: 'dealertire_03',
    date: {
      start: new Date('2007-11-01T12:00:00.000Z'),
      end: new Date('2012-02-01T22:00:00.000Z'),
    },
  },
]

export function getJobsWithDescriptions(
  getJobDescription: (descriptionId?: string) => IMarkdownNode | void
): Job[] {
  return jobs.map(j => {
    return new Job(j, getJobDescription)
  })
}

export default jobs
