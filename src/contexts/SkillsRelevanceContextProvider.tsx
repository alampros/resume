import React, { PropsWithChildren, useCallback, useState } from 'react'

import { clampFloat } from 'data/utils'

import { SkillsRelevanceContext, TSkillsRelevanceCategory } from './SkillsRelevanceContext'

type TProps = PropsWithChildren<{
}>
export const SkillsRelevanceContextProvider = ({ children }: TProps) => {
  const [code, setCode] = useState(1)
  const [ux, setUx] = useState(1)
  const [systems, setSystems] = useState(1)
  const setRelevance = useCallback((category: TSkillsRelevanceCategory, value: number): void => {
    const val = clampFloat(value)
    console.log(`Setting ${category} relevance:`, val)
    switch(category) {
      case 'code':
        setCode(val)
        return
      case 'ux':
        setUx(val)
        return
      case 'systems':
        setSystems(val)
        return
    }
    throw new Error(`Unknown category: "${category}"`)
  }, [])
  return (
    <SkillsRelevanceContext.Provider value={{
      code,
      ux,
      systems,
      setRelevance,
    }}
    >
      {children}
    </SkillsRelevanceContext.Provider>
  )
}
