import { createContext } from 'react'

export type InformationDensity = 'sparse' | 'normal' | 'dense'

export interface IInformationDensityContext {
  density: InformationDensity
}

export const InformationDensityContext = createContext<IInformationDensityContext>({ density: 'normal' })
