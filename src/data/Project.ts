import { ISkill } from 'data/Skill'
import { IDateRange } from 'data/DateRange'

export interface IProject {
  title?: string
  description?: string
  // Skills involved with the project
  skills?: ISkill[]
  // When I worked on the project
  date?: IDateRange
  skillsetRatings?: {
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
  // Float (0-1) representing the scale of the project
  size?: number
  // Whether to show the project in the printed versions of the resume
  print?: boolean
}
