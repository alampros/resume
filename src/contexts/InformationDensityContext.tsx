import { createContext } from 'react'

export type InformationDensity = 'sparse' | 'normal' | 'dense'

export interface IInformationDensityContext {
  density: InformationDensity
  setDensity: (_v: InformationDensity) => void
}

export const InformationDensityContext = createContext<IInformationDensityContext>({ density: 'normal', setDensity: () => {} })
