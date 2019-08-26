import { ISkill } from './Skill'

export interface ISkillGroup {
  title: string
  skills: ISkill[]
}

export default class SkillGroups {
  constructor(skills: ISkill[]) {
    this.skills = skills
  }

  get groups(): ISkillGroup[] {
    return [
      {
        title: 'What I really like doing now:',
        skills: this.skills.filter(({ interest }) => interest >= 0.7),
      },
      {
        title: 'What I can do:',
        skills: this.skills.filter(({ interest }) => (
          interest < 0.7 && interest >= 0.3
        )),
      },
      {
        title: 'What I could be persuaded to do:',
        skills: this.skills.filter(({ interest }) => (
          interest >= 0.1 && interest < 0.3
        )),
      },
      {
        title: 'What I won\'t do again:',
        skills: this.skills.filter(({ interest }) => (
          !interest || interest < 0.1
        )),
      },
    ]
  }

  skills: ISkill[]
}
