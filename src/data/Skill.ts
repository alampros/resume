export interface ISkill {
  id: string
  name: string
  yearsOfExperience: number
  strength: number
  link?: URL
}

export interface IJobSkill {
  skill: ISkill
  importance: number
}
