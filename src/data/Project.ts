import { ISkill } from 'data/Skill'
import DateRange, { IDateRange } from 'data/DateRange'
import SkillsetRatings, { ISkillsetRatings } from './SkillsetRatings'
import { clampFloat } from './utils'

export interface IProject {
  title?: string
  description?: string
  // Detailed description (not used in print). Falls back to `description`.
  descriptionDetail?: string
  // Skills involved with the project
  skills?: ISkill[]
  // When I worked on the project
  date?: IDateRange
  skillsetRatings?: ISkillsetRatings
  // Float (0-1) representing the scale of the project
  size?: number
  // Whether to show the project in the printed versions of the resume
  print?: boolean
}

export default class Project implements IProject {
  constructor(param: IProject) {
    Object.assign(this, param)
    this.size = clampFloat(typeof param.size === 'number' ? param.size : 0.5)
    this.skillsetRatings = new SkillsetRatings(param.skillsetRatings)
    if(param.date) {
      this.date = new DateRange(param.date)
    }
  }

  title?: string
  description?: string
  descriptionDetail?: string
  skills?: ISkill[]
  skillsetRatings?: ISkillsetRatings
  date?: IDateRange
  size?: number
  print?: boolean
}
