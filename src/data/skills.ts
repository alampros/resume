import { Omit } from 'utility-types'

import Skill, { ISkill } from './Skill'

type PartialSkill = Omit<ISkill, 'id'>

const partialSkills: { [id: string]: PartialSkill } = {
  css: {
    name: 'CSS',
    yearsOfExperience: new Date().getFullYear() - 2001,
    strength: 1,
    interest: 0.9,
    link: new URL('https://en.wikipedia.org/wiki/Cascading_Style_Sheets'),
  },
  html: {
    name: 'Semantic HTML',
    yearsOfExperience: new Date().getFullYear() - 2001,
    strength: 1,
    interest: 0.9,
    link: new URL('https://en.wikipedia.org/wiki/Semantic_HTML'),
  },
  design_systems: {
    name: 'Design Systems',
    yearsOfExperience: new Date().getFullYear() - 2017,
    strength: 1,
    interest: 1,
    link: new URL('https://www.smashingmagazine.com/design-systems-book/'),
  },
  js: {
    name: 'JavaScript',
    yearsOfExperience: new Date().getFullYear() - 2002,
    strength: 1,
    interest: 1,
    link: new URL('https://en.wikipedia.org/wiki/JavaScript'),
  },
  ts: {
    name: 'TypeScript',
    yearsOfExperience: new Date().getFullYear() - 2017,
    strength: 8 / 10,
    interest: 1,
    link: new URL('https://www.typescriptlang.org'),
  },
  node: {
    name: 'Node.js',
    yearsOfExperience: new Date().getFullYear() - 2012,
    strength: 1,
    interest: 9 / 10,
    link: new URL('https://nodejs.org'),
  },
  hapi: {
    name: 'Hapi.js',
    yearsOfExperience: new Date().getFullYear() - 2015,
    strength: 9 / 10,
    interest: 9 / 10,
    link: new URL('https://hapijs.com/'),
  },
  webpack: {
    name: 'webpack',
    yearsOfExperience: new Date().getFullYear() - 2016.5,
    strength: 8 / 10,
    interest: 8 / 10,
    link: new URL('https://webpack.js.org'),
  },
  babel: {
    name: 'Babel',
    yearsOfExperience: new Date().getFullYear() - 2018,
    strength: 3 / 10,
    interest: 9 / 10,
    link: new URL('https://babeljs.io'),
  },
  react: {
    name: 'React',
    yearsOfExperience: new Date().getFullYear() - 2015,
    strength: 1,
    interest: 1,
    link: new URL('https://reactjs.org'),
  },
  accessibility: {
    name: 'Accessibility',
    yearsOfExperience: new Date().getFullYear() - 2016,
    strength: 0.9,
    interest: 9 / 10,
    link: new URL('https://www.w3.org/WAI/standards-guidelines/wcag/'),
  },
  docker: {
    name: 'Docker',
    yearsOfExperience: new Date().getFullYear() - 2018.5,
    strength: 0.5,
    interest: 7 / 10,
    link: new URL('https://www.docker.com/'),
  },
  aws_ecs: {
    name: 'AWS ECS',
    yearsOfExperience: 1.5,
    strength: 0.2,
    interest: 3 / 10,
    link: new URL('https://aws.amazon.com/ecs/'),
  },
  aws_et: {
    name: 'AWS ElasticTranscoder',
    yearsOfExperience: 1,
    strength: 0.5,
    interest: 3 / 10,
    lastUsed: new Date(2019, 1), // Probably not going to use this again in the near future
    link: new URL('https://aws.amazon.com/elastictranscoder/'),
  },
  cs: {
    name: 'C#',
    yearsOfExperience: new Date().getFullYear() - 2018,
    strength: 0.5,
    interest: 6 / 10,
    link: new URL('https://en.wikipedia.org/wiki/C_Sharp_(programming_language)'),
  },
  dotnet: {
    name: 'dotnet (core)',
    yearsOfExperience: new Date().getFullYear() - 2018.5,
    strength: 0.5,
    interest: 6 / 10,
    link: new URL('https://dotnet.microsoft.com/download'),
  },
  go: {
    name: 'Go (lang)',
    yearsOfExperience: new Date().getFullYear() - 2018.5,
    strength: 0.2,
    interest: 6 / 10,
    lastUsed: new Date(2018, 6),
    link: new URL('https://golang.org/'),
  },
  sketch: {
    name: 'Sketch',
    yearsOfExperience: new Date().getFullYear() - 2017,
    strength: 0.5,
    interest: 4 / 10,
    lastUsed: new Date(2018, 9),
    link: new URL('https://www.sketchapp.com/'),
  },
  usability_testing: {
    name: 'Usability Testing',
    yearsOfExperience: new Date().getFullYear() - 2015,
    strength: 0.6,
    interest: 3 / 10,
    link: new URL('https://en.wikipedia.org/wiki/Usability_testing'),
  },
  unit_testing: {
    name: 'Unit Testing',
    yearsOfExperience: new Date().getFullYear() - 2012,
    strength: 0.6,
    interest: 7 / 10,
    link: new URL('https://en.wikipedia.org/wiki/Unit_testing'),
  },
  gtm: {
    name: 'Google Tag Manager',
    yearsOfExperience: new Date().getFullYear() - 2015,
    strength: 0.25,
    interest: 2 / 10,
    link: new URL('https://marketingplatform.google.com/about/tag-manager/'),
  },
  ps: {
    name: 'Photoshop',
    yearsOfExperience: new Date().getFullYear() - 2001,
    strength: 0.7,
    interest: 1 / 10,
    link: new URL('https://adobe.com/photoshop'),
  },
  il: {
    name: 'Illustrator',
    yearsOfExperience: new Date().getFullYear() - 2003,
    strength: 0.6,
    interest: 3 / 10,
    link: new URL('https://adobe.com/illustrator'),
  },
  obiee: {
    name: 'OBIEE',
    yearsOfExperience: 1.5,
    strength: 0.6,
    interest: 1 / 10,
    lastUsed: new Date(2016, 2),
    link: new URL('http://www.oracle.com/us/solutions/business-analytics/business-intelligence/enterprise-edition/overview/index.html'),
  },
  cf: {
    name: 'ColdFusion',
    yearsOfExperience: 1.5,
    strength: 0.1,
    interest: 0,
    lastUsed: new Date(2013, 8),
    link: new URL('https://en.wikipedia.org/wiki/Adobe_ColdFusion'),
  },
  gatsby: {
    name: 'Gatsby',
    yearsOfExperience: new Date().getFullYear() - 2017.25,
    strength: 0.9,
    interest: 1,
    link: new URL('https://www.gatsbyjs.org/'),
  },
  git: {
    name: 'git',
    yearsOfExperience: new Date().getFullYear() - 2014.5,
    strength: 0.7,
    interest: 0.9,
    link: new URL('https://git-scm.com/'),
  },
  svn: {
    name: 'Subversion',
    yearsOfExperience: 4,
    strength: 0.3,
    interest: 0.1,
    lastUsed: new Date(2018, 9),
    link: new URL('https://subversion.apache.org/'),
  },
  sql: {
    name: 'SQL',
    yearsOfExperience: 2,
    strength: 0.2,
    interest: 0.4,
    link: new URL('https://www.microsoft.com/en-us/sql-server/'),
  },
  i18n: {
    name: 'I18n',
    yearsOfExperience: new Date().getFullYear() - 2014,
    strength: 0.6,
    interest: 0.8,
    link: new URL('https://en.wikipedia.org/wiki/Internationalization_and_localization'),
  },
  flex: {
    name: 'Adobe Flex',
    yearsOfExperience: 2007.5 - 2004.5,
    strength: 0.5,
    interest: 0,
    lastUsed: new Date(2007, 5),
    link: new URL('https://en.wikipedia.org/wiki/Apache_Flex'),
  },
  flash: {
    name: 'Adobe Flash',
    yearsOfExperience: 2005 - 2000,
    strength: 0.5,
    interest: 0,
    lastUsed: new Date(2005, 0),
    link: new URL('https://en.wikipedia.org/wiki/Adobe_Flash'),
  },
}

const skills: { [id: string]: ISkill } = {}
for(var id in partialSkills) {
  skills[id] = new Skill({
    id,
    ...partialSkills[id],
  })
}
export default skills
