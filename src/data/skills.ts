import Skill, { ISkill, TRelevance } from './Skill'

// const partialSkills = <{[k: string]: TPartialSkill}>{
const partialSkills = {
  react: {
    name: 'React',
    yearsOfExperience: new Date().getFullYear() - 2015,
    strength: 1,
    interest: 1,
    link: new URL('https://reactjs.org'),
    relevance: {
      code: 9 / 10,
      ux: 1,
      systems: 0,
    },
  },
  ts: {
    name: 'TypeScript',
    yearsOfExperience: new Date().getFullYear() - 2017,
    strength: 1,
    interest: 1,
    link: new URL('https://www.typescriptlang.org'),
    relevance: {
      code: 9 / 10,
      ux: 7 / 10,
      systems: 4 / 10,
    },
    comment: 'I will gladly donate my personal time to convert an old JS project to TypeScript 9 times out of 10. The benefits are that compelling.',
  },
  html: {
    name: 'Semantic HTML',
    yearsOfExperience: new Date().getFullYear() - 2001,
    strength: 1,
    interest: 0.9,
    link: new URL('https://en.wikipedia.org/wiki/Semantic_HTML'),
    relevance: {
      code: 2 / 10,
      ux: 8 / 10,
      systems: 0,
    },
    comment: 'Not everything is a <div>',
  },
  design_systems: {
    name: 'Design Systems',
    yearsOfExperience: new Date().getFullYear() - 2017,
    strength: 1,
    interest: 1,
    link: new URL('https://www.smashingmagazine.com/design-systems-book/'),
    relevance: {
      code: 8 / 10,
      ux: 8 / 10,
      systems: 5 / 10,
    },
    comment: 'With proper buy-in from the organization, a good design system can have benefits that extend beyond UX and even positively influence systems architecture',
  },
  js: {
    name: 'JavaScript',
    yearsOfExperience: new Date().getFullYear() - 2002,
    strength: 1,
    interest: 0.6,
    link: new URL('https://en.wikipedia.org/wiki/JavaScript'),
    relevance: {
      code: 6 / 10,
      ux: 4 / 10,
      systems: 3 / 10,
    },
    comment: 'While still a core strength of mine, I rarely write pure JS anymore (#TeamTypeScript)',
  },
  node: {
    name: 'Node.js',
    yearsOfExperience: new Date().getFullYear() - 2012,
    strength: 1,
    interest: 1,
    link: new URL('https://nodejs.org'),
    relevance: {
      code: 7 / 10,
      ux: 5 / 10,
      systems: 6 / 10,
    },
    comment: 'Mostly used for CLI tools or the occasional API.',
  },
  css: {
    name: 'CSS/LESS/SASS',
    yearsOfExperience: new Date().getFullYear() - 2001,
    strength: 1,
    interest: 0.9,
    link: new URL('https://en.wikipedia.org/wiki/Cascading_Style_Sheets'),
    relevance: {
      code: 5 / 10,
      ux: 1,
      systems: 0,
    },
  },
  hapi: {
    name: 'Hapi.js',
    yearsOfExperience: new Date().getFullYear() - 2015,
    strength: 7 / 10,
    interest: 7 / 10,
    link: new URL('https://hapijs.com/'),
    relevance: {
      code: 2 / 10,
      ux: 0,
      systems: 2 / 10,
    },
    comment: 'I *loved* the modularity of this framework for REST APIs. Unfortunately, since its untimely deprecation, I will have to look elsewhere for my next enterprise-grade API framework (NestJS?).',
  },
  webpack: {
    name: 'webpack',
    yearsOfExperience: new Date().getFullYear() - 2016.5,
    strength: 8 / 10,
    interest: 8 / 10,
    link: new URL('https://webpack.js.org'),
    relevance: {
      code: 6 / 10,
      ux: 8 / 10,
      systems: 0,
    },
    comment: 'The everpresent and ubiquitous...',
  },
  babel: {
    name: 'Babel',
    yearsOfExperience: new Date().getFullYear() - 2018,
    strength: 3 / 10,
    interest: 9 / 10,
    link: new URL('https://babeljs.io'),
    relevance: {
      code: 2 / 10,
      ux: 3 / 10,
      systems: 0,
    },
    comment: 'You can\'t throw a rock in javascript without hitting babel, but most devs don\'t bother peeking under the hood. I invested almost 6 months in 2018 learning the core of babel by following the development of their v7 refactor.',
  },
  accessibility: {
    name: 'Accessibility',
    yearsOfExperience: new Date().getFullYear() - 2016,
    strength: 0.9,
    interest: 9 / 10,
    link: new URL('https://www.w3.org/WAI/standards-guidelines/wcag/'),
    relevance: {
      code: 7 / 10,
      ux: 1,
      systems: 0,
    },
    comment: 'Giving the browser the right information to make sites accessible to all users is a crucial component of good user experience',
  },
  docker: {
    name: 'Docker',
    yearsOfExperience: new Date().getFullYear() - 2018.5,
    strength: 8 / 10,
    interest: 8 / 10,
    link: new URL('https://www.docker.com/'),
    relevance: {
      code: 1,
      ux: 0,
      systems: 1,
    },
  },
  docker_swarm: {
    name: 'Docker Swarm',
    yearsOfExperience: new Date().getFullYear() - 2019.5,
    strength: 0.4,
    interest: 9 / 10,
    link: new URL('https://www.docker.com/'),
    relevance: {
      code: 0,
      ux: 0,
      systems: 1,
    },
    comment: 'Combine with Portainer, this is the perfect middleground between docker-compose and kubernetes',
  },
  aws_ecs: {
    name: 'AWS ECS',
    yearsOfExperience: 1.5,
    strength: 2 / 10,
    interest: 3 / 10,
    link: new URL('https://aws.amazon.com/ecs/'),
    relevance: {
      code: 0,
      ux: 0,
      systems: 1 / 10,
    },
  },
  aws_et: {
    name: 'AWS ElasticTranscoder',
    yearsOfExperience: 1,
    strength: 0.5,
    interest: 3 / 10,
    lastUsed: new Date(2019, 1), // Probably not going to use this again in the near future
    link: new URL('https://aws.amazon.com/elastictranscoder/'),
    relevance: {
      code: 0,
      ux: 0,
      systems: 1 / 10,
    },
    comment: 'Has its quirks, but it beats cooking your own CPUs.',
  },
  dotnet: {
    name: 'dotnet (C#)',
    yearsOfExperience: new Date().getFullYear() - 2017,
    strength: 0.5,
    interest: 4 / 10,
    link: new URL('https://dotnet.microsoft.com/'),
    relevance: {
      code: 8 / 10,
      ux: 0,
      systems: 0,
    },
    comment: 'Since dotnet core hit the scene, I\'ve opted for this tool more and more',
  },
  go: {
    name: 'Go (lang)',
    yearsOfExperience: new Date().getFullYear() - 2018.5,
    strength: 1 / 10,
    interest: 6 / 10,
    lastUsed: new Date(2018, 6),
    link: new URL('https://golang.org/'),
    relevance: {
      code: 3 / 10,
      ux: 0,
      systems: 0,
    },
    comment: 'I\'ve never had a project need arise to use golang, but it is *very* appealing on many levels. Given the opportunity/need, I would dive in head-first.',
  },
  sketch: {
    name: 'Sketch',
    yearsOfExperience: new Date().getFullYear() - 2017,
    strength: 0.5,
    interest: 4 / 10,
    lastUsed: new Date(2018, 9),
    link: new URL('https://www.sketchapp.com/'),
    relevance: {
      code: 2 / 10,
      ux: 5 / 10,
      systems: 2 / 10,
    },
    comment: 'The programmatic accessibility of the Sketch data format makes it amazingly useful for design system development.',
  },
  usability_testing: {
    name: 'Usability Testing',
    yearsOfExperience: new Date().getFullYear() - 2015,
    strength: 7 / 10,
    interest: 3 / 10,
    link: new URL('https://en.wikipedia.org/wiki/Usability_testing'),
    relevance: {
      code: 0,
      ux: 9 / 10,
      systems: 0,
    },
    comment: 'A tight feedback loop to actual users is crucial to good UX cultivation',
  },
  unit_testing: {
    name: 'Unit Testing',
    yearsOfExperience: new Date().getFullYear() - 2012,
    strength: 6 / 10,
    interest: 7 / 10,
    link: new URL('https://en.wikipedia.org/wiki/Unit_testing'),
    relevance: {
      code: 1,
      ux: 4 / 10,
      systems: 0,
    },
    comment: 'Critical for business logic, but (UNPOPULAR OPINION WARNING) I have yet to find a well-reasoned use for UI component unit tests.',
  },
  gtm: {
    name: 'Google Tag Manager',
    yearsOfExperience: new Date().getFullYear() - 2015,
    strength: 1 / 4,
    interest: 2 / 10,
    link: new URL('https://marketingplatform.google.com/about/tag-manager/'),
    relevance: {
      code: 1 / 10,
      ux: 3 / 10,
      systems: 0,
    },
  },
  ps: {
    name: 'Photoshop',
    yearsOfExperience: new Date().getFullYear() - 2001,
    strength: 5 / 10,
    interest: 1 / 10,
    link: new URL('https://adobe.com/photoshop'),
    relevance: {
      code: 0,
      ux: 1 / 10,
      systems: 0,
    },
  },
  il: {
    name: 'Illustrator',
    yearsOfExperience: new Date().getFullYear() - 2003,
    strength: 6 / 10,
    interest: 3 / 10,
    link: new URL('https://adobe.com/illustrator'),
    relevance: {
      code: 0,
      ux: 1 / 10,
      systems: 0,
    },
  },
  obiee: {
    name: 'OBIEE',
    yearsOfExperience: 1.5,
    strength: 0.6,
    interest: 1 / 10,
    lastUsed: new Date(2016, 2),
    link: new URL('http://www.oracle.com/us/solutions/business-analytics/business-intelligence/enterprise-edition/overview/index.html'),
  },
  metabase: {
    name: 'Metabase',
    yearsOfExperience: 1,
    strength: 0.8,
    interest: 8 / 10,
    lastUsed: new Date(2020, 11),
    link: new URL('https://www.metabase.com/'),
    relevance: {
      code: 1 / 10,
      ux: 1 / 10,
      systems: 2 / 10,
    },
    comment: 'For internal use, this saved my team countless hours of SQL development and empowered users to explore data for themselves',
  },
  cf: {
    name: 'ColdFusion',
    yearsOfExperience: 1.5,
    strength: 0.1,
    interest: 0,
    lastUsed: new Date(2013, 8),
    link: new URL('https://en.wikipedia.org/wiki/Adobe_ColdFusion'),
    comment: 'If I could physically punch software, ColdFusion would be first in line.',
  },
  gatsby: {
    name: 'Gatsby',
    yearsOfExperience: new Date().getFullYear() - 2017.25,
    strength: 0.9,
    interest: 1,
    link: new URL('https://www.gatsbyjs.org/'),
    relevance: {
      code: 1,
      ux: 1,
      systems: 8 / 10,
    },
    comment: 'I\'ve used Gatsby for so many projects that I\'m dangerously unfamiliar with the default "create-react-app" toolchain 😬.',
  },
  git: {
    name: 'git',
    yearsOfExperience: new Date().getFullYear() - 2014.5,
    strength: 0.9,
    interest: 0.7,
    link: new URL('https://git-scm.com/'),
    relevance: {
      code: 1,
      ux: 0.5,
      systems: 8 / 10,
    },
  },
  svn: {
    name: 'Subversion',
    yearsOfExperience: 4,
    strength: 0.1,
    interest: 0.1,
    lastUsed: new Date(2018, 9),
    link: new URL('https://subversion.apache.org/'),
    comment: 'Look, we just didn\'t know any better, ok?',
  },
  sql: {
    name: 'MSSQL',
    yearsOfExperience: 4,
    lastUsed: new Date(2020, 12),
    strength: 0.4,
    interest: 0.6,
    link: new URL('https://www.microsoft.com/en-us/sql-server/'),
    relevance: {
      code: 2 / 3,
      ux: 0,
      systems: 1 / 3,
    },
  },
  pgsql: {
    name: 'PostgreSQL',
    yearsOfExperience: 2,
    strength: 0.3,
    interest: 0.8,
    link: new URL('https://www.postgresql.org/'),
    relevance: {
      code: 2 / 3,
      ux: 0,
      systems: 4 / 10,
    },
  },
  i18n: {
    name: 'I18n',
    yearsOfExperience: new Date().getFullYear() - 2014,
    strength: 0.6,
    interest: 0.8,
    link: new URL('https://en.wikipedia.org/wiki/Internationalization_and_localization'),
    relevance: {
      code: 0.2,
      ux: 0.5,
      systems: 0.1,
    },
    comment: 'Internationalization is not just translation: formatting of all sorts, and even design languages need to be considered when your work speaks on the global stage',
  },
  flex: {
    name: 'Adobe Flex',
    yearsOfExperience: 2007.5 - 2004.5,
    strength: 0.5,
    interest: 0,
    lastUsed: new Date(2007, 5),
    link: new URL('https://en.wikipedia.org/wiki/Apache_Flex'),
    comment: 'Yes, ActionScript is *actually* an ECMAScript implementation!',
  },
  flash: {
    name: 'Adobe Flash',
    yearsOfExperience: 2005 - 2000,
    strength: 0.3,
    interest: 0,
    lastUsed: new Date(2005, 0),
    link: new URL('https://en.wikipedia.org/wiki/Adobe_Flash'),
    comment: 'Respect your roots',
  },
  linux: {
    name: 'Linux',
    yearsOfExperience: new Date().getFullYear() - 2007,
    strength: 0.9,
    interest: 0.7,
    link: new URL('https://en.wikipedia.org/wiki/Linux'),
    relevance: {
      code: 2 / 3,
      ux: 0,
      systems: 1,
    },
    comment: 'Mostly RHEL or Ubuntu nowadays, but my first love was OpenSUSE.',
  },
  jira: {
    name: 'Jira',
    yearsOfExperience: new Date().getFullYear() - 2018,
    strength: 0.7,
    interest: 0.5,
    link: new URL('https://www.atlassian.com/software/jira'),
    relevance: {
      code: 2 / 3,
      ux: 0,
      systems: 8 / 10,
    },
    comment: 'Mostly RHEL or Ubuntu nowadays, but my first love was OpenSUSE.',
  },
  vb: {
    name: 'VisualBasic',
    yearsOfExperience: 0.25,
    strength: 0.0001,
    interest: 0,
    lastUsed: new Date(2020, 10),
    link: new URL('https://www.merriam-webster.com/dictionary/dumpster%20fire'),
  },
  asp: {
    name: 'ASP',
    yearsOfExperience: 0.25,
    strength: 0.0001,
    interest: 0,
    lastUsed: new Date(2020, 10),
    link: new URL('https://www.merriam-webster.com/dictionary/dumpster%20fire'),
  },
}

/* eslint-disable @typescript-eslint/no-unused-vars */
type ISkills = { [id in keyof typeof partialSkills]: Skill }
type TPartialSkill = Omit<ISkill, 'id' | 'relevance'> & Partial<Pick<ISkill, 'id' | 'relevance'>>
type TPartialSkills = { [id in keyof ISkills]: TPartialSkill }
/* eslint-enable @typescript-eslint/no-unused-vars */

export const skills = Object.entries(partialSkills as TPartialSkills).reduce((acc, [k, v]): ISkills => {
  if(v.relevance) {
    for(const r in v.relevance) {
      if(v.relevance[r as keyof TRelevance] > 1) {
        throw new RangeError(`Relevance rating out of bounds for skill "${k}"`)
      }
    }
  }
  acc[k as keyof typeof partialSkills] = new Skill({
    id: k,
    relevance: v.relevance || { code: 0, systems: 0, ux: 0 },
    ...v,
  })
  return acc
}, {} as ISkills)
