import { Omit } from 'utility-types'
import { ISkill } from './Skill'

type PartialSkill = Omit<ISkill, 'id'>

const skills: { [id: string]: PartialSkill } = {
  js: {
    name: 'JavaScript',
    yearsOfExperience: new Date().getFullYear() - 2002,
    strength: 1,
    link: new URL('https://en.wikipedia.org/wiki/JavaScript'),
  },
  ts: {
    name: 'TypeScript',
    yearsOfExperience: new Date().getFullYear() - 2017,
    strength: 7 / 10,
    link: new URL('https://www.typescriptlang.org'),
  },
  node: {
    name: 'Node.js',
    yearsOfExperience: new Date().getFullYear() - 2012,
    strength: 1,
    link: new URL('https://nodejs.org'),
  },
  webpack: {
    name: 'webpack',
    yearsOfExperience: new Date().getFullYear() - 2016.5,
    strength: 8 / 10,
    link: new URL('https://webpack.js.org'),
  },
  babel: {
    name: 'Babel',
    yearsOfExperience: new Date().getFullYear() - 2018,
    strength: 3 / 10,
    link: new URL('https://babeljs.io'),
  },
  react: {
    name: 'React',
    yearsOfExperience: new Date().getFullYear() - 2015,
    strength: 1,
    link: new URL('https://reactjs.org'),
  },
  accessibility: {
    name: 'Accessibility',
    yearsOfExperience: new Date().getFullYear() - 2016,
    strength: 0.9,
    link: new URL('https://www.w3.org/WAI/standards-guidelines/wcag/'),
  },
  docker: {
    name: 'Docker',
    yearsOfExperience: new Date().getFullYear() - 2018.5,
    strength: 0.3,
    link: new URL('https://www.docker.com/'),
  },
  aws_ecs: {
    name: 'AWS ECS',
    yearsOfExperience: new Date().getFullYear() - 2018,
    strength: 0.2,
    link: new URL('https://aws.amazon.com/ecs/'),
  },
  cs: {
    name: 'C#',
    yearsOfExperience: new Date().getFullYear() - 2018,
    strength: 0.1,
    link: new URL('https://en.wikipedia.org/wiki/C_Sharp_(programming_language)'),
  },
  go: {
    name: 'Go (lang)',
    yearsOfExperience: new Date().getFullYear() - 2018.5,
    strength: 0.2,
    link: new URL('https://golang.org/'),
  },
}

const defaultedSkills: { [id: string]: ISkill } = {}
for(var id in skills) {
  defaultedSkills[id] = {
    id,
    ...skills[id],
  }
}
export default defaultedSkills
