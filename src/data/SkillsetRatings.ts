import { clampFloat } from './utils'

export interface ISkillsetRatings {
  // Float (0-1) representing how related the project was to my design skillset
  design?: number
  // Float (0-1) representing how related the project was to my development skillset
  development?: number
  // Float (0-1) representing how related the project was to my organizational skillset
  organization?: number
  // Float (0-1) representing how related the project was to my leadership skillset
  leadership?: number
  // Float (0-1) representing how related the project was to my communication skillset
  communication?: number
}

export default class SkillsetRatings implements ISkillsetRatings {
  constructor(param: ISkillsetRatings = {}) {
    Object.assign(this, param)
    if(param) {
      ['design', 'development', 'organization', 'leadership', 'communication'].forEach(k => {
        const val = (param as any)[k]
        if(typeof val === 'number') {
          (this as any)[k] = clampFloat(val)
        }
      })
    }
  }
  design?: number
  development?: number
  organization?: number
  leadership?: number
  communication?: number
}
