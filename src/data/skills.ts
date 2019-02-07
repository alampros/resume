import { Omit } from 'utility-types'
import { ISkill } from './Skill'

type PartialSkill = Omit<ISkill, 'id'>

const skills: { [id: string]: PartialSkill } = {
  js: {
    name: 'JavaScript',
    yearsOfExperience: new Date().getFullYear() - 2002,
    strength: 1,
  },
  ts: {
    name: 'TypeScript',
    yearsOfExperience: new Date().getFullYear() - 2017,
    strength: 7 / 10,
  },
  webpack: {
    name: 'webpack',
    yearsOfExperience: new Date().getFullYear() - 2016.5,
    strength: 8 / 10,
  },
  babel: {
    name: 'Babel',
    yearsOfExperience: new Date().getFullYear() - 2018,
    strength: 3 / 10,
  },
  react: {
    name: 'React',
    yearsOfExperience: new Date().getFullYear() - 2015,
    strength: 1,
  },
  accessibility: {
    name: 'Accessibility',
    yearsOfExperience: new Date().getFullYear() - 2016,
    strength: 0.9,
  },
  docker: {
    name: 'Docker',
    yearsOfExperience: new Date().getFullYear() - 2018.5,
    strength: 0.3,
  },
  aws_ecs: {
    name: 'AWS ECS',
    yearsOfExperience: new Date().getFullYear() - 2018,
    strength: 0.2,
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
