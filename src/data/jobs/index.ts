import Job, { IJobConstructorParam } from './Job'
import { IMarkdownNode } from 'data/GatsbyTypes'
import skills from 'data/skills'

const jobs: IJobConstructorParam[] = [
  {
    title: 'User Experience Architect',
    companyId: 'roundtable',
    department: 'Engineering',
    descriptionId: 'roundtable_01',
    date: {
      start: new Date('2018-05-14T12:00:00.000Z'),
    },
    skills: [
      { skill: skills.js, importance: 1 },
      { skill: skills.ts, importance: 0.9 },
      { skill: skills.webpack, importance: 0.7 },
      { skill: skills.babel, importance: 0.3 },
      { skill: skills.accessibility, importance: 0.2 },
      { skill: skills.docker, importance: 0.5 },
      { skill: skills.node, importance: 0.9 },
      { skill: skills.aws_ecs, importance: 0.3 },
    ],
  },
  {
    title: 'Product Designer',
    companyId: 'dealertire',
    department: 'Product Management',
    descriptionId: 'dealertire_01',
    date: {
      start: new Date('2017-11-01T12:00:00.000Z'),
      end: new Date('2018-05-11T22:00:00.000Z'),
    },
    skills: [
      { skill: skills.js, importance: 1 },
      { skill: skills.ts, importance: 0.9 },
      { skill: skills.sketch, importance: 0.6 },
      { skill: skills.webpack, importance: 0.7 },
      { skill: skills.accessibility, importance: 0.4 },
      { skill: skills.node, importance: 0.3 },
      { skill: skills.usability_testing, importance: 0.6 },
      { skill: skills.gtm, importance: 0.3 },
    ],
  },
  {
    title: 'Technology Architect – User Experience',
    companyId: 'dealertire',
    department: 'Enterprise Architecture',
    descriptionId: 'dealertire_02',
    date: {
      start: new Date('2012-02-01T12:00:00.000Z'),
      end: new Date('2017-08-01T22:00:00.000Z'),
    },
    skills: [
      { skill: skills.js, importance: 0.5 },
      { skill: skills.node, importance: 0.3 },
      { skill: skills.ps, importance: 0.25 },
      { skill: skills.il, importance: 0.25 },
      { skill: skills.obiee, importance: 0.25 },
    ],
  },
  {
    title: 'Web Designer, R&D Developer, Technology Evaluator',
    companyId: 'dealertire',
    department: 'Information Systems',
    descriptionId: 'dealertire_03',
    date: {
      start: new Date('2007-11-01T12:00:00.000Z'),
      end: new Date('2012-02-01T22:00:00.000Z'),
    },
    skills: [
      { skill: skills.js, importance: 0.5 },
      { skill: skills.ps, importance: 1 },
      { skill: skills.il, importance: 0.75 },
      { skill: skills.cf, importance: 0.1 },
    ],
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
