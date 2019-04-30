import Job, { IJobConstructorParam } from './Job'
import skills from 'data/skills'

const jobs: IJobConstructorParam[] = [
  {
    title: 'Senior Developer',
    companyId: 'testoil',
    department: 'Engineering',
    description: 'Design, plan, and build the next major version of the Laboratory Information Management System. Develop internal mobile lab sample tracking app. Improve and develop new features for the customer data access portal. Mentorship of development team.',
    date: {
      start: new Date('2018-04-29T12:00:00.000Z'),
    },
  },
  {
    title: 'User Experience Architect',
    companyId: 'roundtable',
    department: 'Engineering',
    description: 'Design and implement a ground-up rebuild of the core twelve-year-old .NET application from database, through application services to the front-end. Create and evangelize a design system and component library as a first-class product and source for other products to consume.',
    projects: [
      {
        title: 'Video Transcoder API',
        description: 'Built a containerized JSON REST API for transcoding video into LMS-compatible SCORM training modules with 96% test coverage. Included well-documented, standalone client React component and CLI tool for batching jobs.',
        skills: [skills.ts, skills.node, skills.hapi, skills.react, skills.unit_testing, skills.aws_ecs, skills.aws_et],
        size: 0,
        skillsetRatings: {
          design: 0.2,
          development: 1,
          communication: 0.6,
          leadership: 0.5,
          organization: 0.7,
        },
      },
      {
        title: 'rtolms-cli',
        description: 'Created a custom CLI tool that increased the efficiency of the entire engineering team.',
        descriptionDetail: 'Created a custom CLI tool to aid development of the flagship software product. The tool increased efficiency of the entire engineering team by speeding repetitive tasks and reducing the risk of human errors. It included tools for switching configuration contexts, executing SQL incrementals, bulk git operations, and various other workflow enhancements.',
        skills: [skills.ts, skills.node, skills.hapi],
        skillsetRatings: {
          design: 0.3,
          development: 0.9,
          communication: 0.7,
          leadership: 0.4,
          organization: 0.8,
        },
      },
      {
        title: 'svn => git',
        description: 'Transitioned company from monolithic subversion SCM to multi-repository git. Created tooling to automate parts of the transition. Trained both engineering and support teams.',
        skills: [skills.git, skills.svn],
        skillsetRatings: {
          design: 0.1,
          development: 0.5,
          communication: 1,
          leadership: 0.9,
          organization: 0.8,
        },
      },
      {
        title: 'Continuous Integration Pipeline',
        description: 'Implemented continuous integration for core product line and laid groundwork for fully-automated continuous deployment system.',
        skills: [skills.git, skills.unit_testing],
        skillsetRatings: {
          design: 0,
          development: 0.3,
          communication: 0.9,
          leadership: 1,
          organization: 0.8,
        },
      },
    ],
    date: {
      start: new Date('2018-05-14T12:00:00.000Z'),
      end: new Date('2019-03-31T12:00:00.000Z'),
    },
    skills: [
      { skill: skills.js, relevance: 1 },
      { skill: skills.ts, relevance: 0.9 },
      { skill: skills.webpack, relevance: 0.7 },
      { skill: skills.babel, relevance: 0.3 },
      { skill: skills.accessibility, relevance: 0.2 },
      { skill: skills.docker, relevance: 0.5 },
      { skill: skills.node, relevance: 0.9 },
      { skill: skills.aws_ecs, relevance: 0.25 },
      { skill: skills.aws_et, relevance: 0.25 },
      { skill: skills.hapi, relevance: 0.25 },
    ],
  },
  {
    title: 'Product Designer',
    companyId: 'dealertire',
    department: 'Product Management',
    description: 'Orchestrated move to new position in Marketing Department to collocate all User Experience design roles. Lead product design initiatives for B2B properties and create efficiencies by sharing assets between all web properties (B2B, B2C, internal).',
    projects: [
      {
        title: 'Multi-tenant Design System',
        description: 'Created unified design system across six independent product web platforms.',
        descriptionDetail: 'Created a unified design system across six independent product web platforms. The system was composed of four major parts, all through the lens of one of 22 strong Fortune 500 brand identities: design tokens, a component library, a brand-dynamic glossary of terms, and copy writing guides.',
        skills: [skills.gatsby, skills.sketch, skills.node, skills.design_systems, skills.css],
        skillsetRatings: {
          design: 1,
          development: 1,
          communication: 0.9,
          leadership: 0.8,
          organization: 0.9,
        },
      },
      {
        title: 'Unified Enterprise Iconography',
        description: 'Centralized internal iconography tools to generate icon packages in six formats for consumption by developers and designers from the same source of truth.',
        descriptionDetail: 'Created a centralized, enterprise-wide iconography tool chain to generate and distribute icon packages in six formats from the same source of truth. The packages were utilized by both the design teams (Sketch.app library, optimized SVGs), and the development teams (SVG sprites, React components, icon web fonts). Included a web tool for browsing, searching, and managing the icons from a single source of truth.',
        skills: [skills.node, skills.sketch, skills.il, skills.gatsby],
        skillsetRatings: {
          design: 0.2,
          development: 1,
          communication: 0.7,
          leadership: 0.8,
          organization: 1,
        },
      },
      {
        title: 'Multivariate Testing',
        description: 'Spearheaded multivariate testing initiative.',
        descriptionDetail: 'Spearheaded the multivariate testing initiative, including documenting and communicating the procedures and analysis methodology, the requirements for test candidates, and the user pool segmentation strategy.',
        skills: [skills.gtm, skills.usability_testing],
        skillsetRatings: {
          design: 1,
          development: 0.4,
          communication: 0.9,
          leadership: 1,
          organization: 0.7,
        },
      },
    ],
    date: {
      start: new Date('2017-11-01T12:00:00.000Z'),
      end: new Date('2018-05-11T22:00:00.000Z'),
    },
    skills: [
      { skill: skills.js, relevance: 1 },
      { skill: skills.design_systems, relevance: 0.75 },
      { skill: skills.css, relevance: 0.75 },
      { skill: skills.html, relevance: 0.75 },
      { skill: skills.ts, relevance: 0.9 },
      { skill: skills.sketch, relevance: 0.6 },
      { skill: skills.webpack, relevance: 0.5 },
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
    description: 'Promoted to new position in IT for overseeing all B2B web platforms and user interfaces.',
    date: {
      start: new Date('2012-02-01T12:00:00.000Z'),
      end: new Date('2017-11-01T22:00:00.000Z'),
    },
    projects: [
      {
        title: 'B2B v6',
        description: 'Designed, built, and user-tested fully-functional prototype of new core B2B web platform. User-tested 3 major versions and 28 feature variations in 3 locales and 9 U.S. cities.',
        skills: [skills.react, skills.usability_testing, skills.i18n],
        skillsetRatings: {
          design: 1,
          development: 0.2,
          communication: 0.9,
          leadership: 1,
          organization: 0.5,
        },
      },
      {
        title: 'Application Server Replacement Selection',
        description: 'Led cross-functional team to evaluate and select a replacement for the ColdFusion application layer server. Hosted guest experts to present overviews on 6 candidate languages: nodejs, C#, Go, JavaEE, python, and Scala. Collected and presented research and recommendations to executive team. Assisted in implementation planning and training.',
        skillsetRatings: {
          design: 0,
          development: 0.3,
          communication: 0.9,
          leadership: 1,
          organization: 0.6,
        },
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
    description: 'Designed, developed, and tested prototypes for identifying opportunities to improve dealership operational effectiveness. Worked with development team to construct new iteration of the core business-to-business web platform.',
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

export default jobs.map(jobDescriptor => new Job(jobDescriptor))
