import React, { PropsWithChildren, useState } from 'react'

import { InformationDensity, InformationDensityContext } from 'contexts/InformationDensityContext'

type TProps = PropsWithChildren<{
  initialDensity?: InformationDensity
}>
export const InformationDensityContextProvider = ({ initialDensity, children }: TProps) => {
  const [density, setDensity] = useState(initialDensity)
  return (
    <InformationDensityContext.Provider value={{
      density: density || 'normal',
      setDensity,
    }}
    >
      {children}
    </InformationDensityContext.Provider>
  )
}
