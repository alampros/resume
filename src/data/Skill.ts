export interface ISkill {
  id: string
  name: string
  yearsOfExperience: number
  lastUsed?: Date // if not present, assume current
  strength: number
  interest: number
  link?: URL
}

export interface IJobSkill {
  skill: ISkill
  relevance: number
}
