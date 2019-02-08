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
      { skill: skills.js, relevance: 1 },
      { skill: skills.ts, relevance: 0.9 },
      { skill: skills.webpack, relevance: 0.7 },
      { skill: skills.babel, relevance: 0.3 },
      { skill: skills.accessibility, relevance: 0.2 },
      { skill: skills.docker, relevance: 0.5 },
      { skill: skills.node, relevance: 0.9 },
      { skill: skills.aws_ecs, relevance: 0.3 },
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
      { skill: skills.js, relevance: 1 },
      { skill: skills.ts, relevance: 0.9 },
      { skill: skills.sketch, relevance: 0.6 },
      { skill: skills.webpack, relevance: 0.7 },
      { skill: skills.accessibility, relevance: 0.4 },
      { skill: skills.node, relevance: 0.3 },
      { skill: skills.usability_testing, relevance: 0.6 },
      { skill: skills.gtm, relevance: 0.3 },
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
      { skill: skills.js, relevance: 0.5 },
      { skill: skills.node, relevance: 0.3 },
      { skill: skills.ps, relevance: 0.25 },
      { skill: skills.il, relevance: 0.25 },
      { skill: skills.obiee, relevance: 0.25 },
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
      { skill: skills.js, relevance: 0.5 },
      { skill: skills.ps, relevance: 1 },
      { skill: skills.il, relevance: 0.75 },
      { skill: skills.cf, relevance: 0.1 },
    ],
  },
]

export function getJobsWithDescriptions(
  getJobDescription: (descriptionId?: string) => IMarkdownNode | void
): Job[] {
  return jobs.map(jobDescriptor => {
    return new Job(jobDescriptor, getJobDescription)
  })
  /**
   * @todo: normalize skill importance
   *
    .map(job => {
      const totalImportance = job.skills.reduce((acc, jobSkill) => {
        acc += jobSkill.importance
        return acc
      }, 0)
      job.skills.forEach(skill => {
        const normalizedImportance = skill.importance / totalImportance
        console.log(`${skill.importance} => ${normalizedImportance}`)
        skill.importance = normalizedImportance
      })
      return job
    })
   */
}

export default jobs
