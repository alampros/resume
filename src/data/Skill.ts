export interface ISkill {
  id: string
  name: string
  yearsOfExperience: number
  lastUsed?: Date // if not present, assume current
  strength: number
  interest: number
  link?: URL
  readonly link2LD?: string
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
  }

  get link2LD(): string | undefined {
    if(!this.link) return
    return this.link.host.split('.').slice(-2).join('.')
  }

  id: string
  name: string
  yearsOfExperience: number
  lastUsed?: Date // if not present, assume current
  strength: number
  interest: number
  link?: URL
}
