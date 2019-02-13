import Job, { IJobConstructorParam } from './Job'
import { IMarkdownNode } from 'data/GatsbyTypes'
import skills from 'data/skills'

const jobs: IJobConstructorParam[] = [
  {
    title: 'User Experience Architect',
    companyId: 'roundtable',
    department: 'Engineering',
    projects: [
      {
        description: 'Built a containerized JSON REST API for transcoding video into LMS-compatible SCORM training modules with 96% test coverage. Included well-documented, standalone client React component and CLI tool for batching jobs.',
        skills: [skills.ts, skills.node, skills.hapi, skills.react, skills.unit_testing],
      },
      {
        // description: 'Increased engineering team efficiency by creating a custom CLI tool to speed development',
        description: 'Created a custom CLI tool that increased the efficiency of the entire engineering team',
        skills: [skills.ts, skills.node, skills.hapi],
      },
      {
        description: 'Lead the transition from local monolithic subversion SCM to multi-repository git while maintaining historical logs dating back to 2002. Created tooling to automate parts of the transition. Trained both engineering and support teams on git.',
        skills: [skills.git, skills.svn],
      },
      {
        description: 'Implemented continuous integration for core product line and laid groundwork for fully-automated continuous deployment system.',
        skills: [skills.git, skills.unit_testing],
      },
    ],
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
    description: 'Promoted to new position in Marketing Department',
    projects: [
      {
        description: 'Created unified design system across six independent product web platforms',
        skills: [skills.gatsby, skills.sketch, skills.node],
      },
      {
        description: 'Centralized internal iconography tools to generate icon packages in six formats for consumption by developers and designers from the same source of truth',
        skills: [skills.node, skills.sketch],
      },
      {
        description: 'Spearheaded multivariate testing initiative',
        skills: [skills.gtm, skills.usability_testing],
      },
    ],
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
    title: 'Enterprise Architect – User Experience',
    companyId: 'dealertire',
    department: 'Enterprise Architecture',
    descriptionId: 'dealertire_02.md',
    date: {
      start: new Date('2012-02-01T12:00:00.000Z'),
      end: new Date('2017-08-01T22:00:00.000Z'),
    },
    projects: [
      {
        description: 'Designed, built, and user-tested fully-functional prototype of new core B2B web platform. User-tested 3 major versions and 28 feature variations in 3 locales and 9 U.S. cities.',
        skills: [skills.react, skills.usability_testing, skills.i18n],
      },
    ],
    skills: [
      { skill: skills.js, relevance: 0.5 },
      { skill: skills.node, relevance: 0.3 },
      { skill: skills.ps, relevance: 0.25 },
      { skill: skills.il, relevance: 0.25 },
      { skill: skills.obiee, relevance: 0.25 },
      { skill: skills.usability_testing, relevance: 0.25 },
    ],
  },
  {
    title: 'Web Designer, R&D Developer',
    companyId: 'dealertire',
    department: 'Information Systems',
    descriptionId: 'dealertire_03.md',
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
}

export default jobs
