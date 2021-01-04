export type TRelevance = {
  ux: number
  systems: number
  code: number
}
export interface ISkill {
  id: string
  name: string
  yearsOfExperience: number
  lastUsed?: Date // if not present, assume current
  strength: number
  interest: number
  link?: URL
  readonly link2LD?: string
  relevance: TRelevance
  comment?: string
}

export interface IJobSkill {
  skill: ISkill
  relevance?: number
}

export default class Skill implements ISkill {
  constructor(c: ISkill) {
    Object.assign(this, c)
    this.id = c.id
    this.name = c.name
    this.yearsOfExperience = c.yearsOfExperience
    this.lastUsed = c.lastUsed
    this.strength = c.strength
    this.interest = c.interest
    this.link = c.link
    this.relevance = c.relevance
    this.comment = c.comment
  }

  get link2LD(): string | undefined {
    if(!this.link) return
    return this.link.host.split('.').slice(-2).join('.')
  }

  get meanRelevance(): number {
    const vals = Object.values(this.relevance)
    return vals.reduce((acc, v) => {
      acc += v
      return acc
    }, 0) / vals.length
  }

  id: string
  name: string
  yearsOfExperience: number
  lastUsed?: Date // if not present, assume current
  strength: number
  interest: number
  link?: URL
  relevance: TRelevance
  comment?: string
}
