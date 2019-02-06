import Job, { IJobConstructorParam } from './Job'
import { IMarkdownNode } from 'data/GatsbyTypes'

const jobs: IJobConstructorParam[] = [
  {
    title: 'User Experience Architect',
    companyId: 'roundtable',
    descriptionId: 'roundtable_01',
    date: {
      start: new Date('2018-05-14T12:00:00.000Z'),
    },
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
]

export function getJobsWithDescriptions(
  getJobDescription: (descriptionId?: string) => IMarkdownNode | void
): Job[] {
  return jobs.map(j => {
    return new Job(j, getJobDescription)
  })
}

export default jobs
