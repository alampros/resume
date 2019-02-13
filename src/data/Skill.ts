export interface ISkill {
  id: string
  name: string
  yearsOfExperience: number
  strength: number
  interest: number
  link?: URL
}

export interface IJobSkill {
  skill: ISkill
  relevance: number
}
