export interface ISkill {
  id: string
  name: string
  yearsOfExperience: number
  strength: number
}

export interface IJobSkill {
  skill: ISkill
  importance: number
}
