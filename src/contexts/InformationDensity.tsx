import { createContext } from 'react'

export interface IInformationDensityContext {
  density: 'sparse' | 'normal' | 'dense'
}

export const InformationDensityContext = createContext<IInformationDensityContext>({ density: 'normal' })
