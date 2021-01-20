import { createContext } from 'react'

export type TSkillsRelevanceCategory = 'code' | 'ux' | 'systems'

export interface ISkillsRelevanceContext {
  code: number
  ux: number
  systems: number
  setRelevance: (_category: TSkillsRelevanceCategory, _v: number) => void
}

export const SkillsRelevanceContext = createContext<ISkillsRelevanceContext>({
  code: 1,
  ux: 1,
  systems: 1,
  setRelevance: () => {},
})
