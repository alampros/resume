import React, { useMemo } from 'react'

import { IAddress } from 'data/Address'

const stateAbbrs: { [stateName: string]: string } = {
  OH: 'Ohio',
}

type TProps = {
  address: Partial<IAddress>
} & React.HTMLProps<HTMLSpanElement>

export const Address: React.FC<TProps> = (props: TProps) => {
  const {
    address: {
      city,
      state,
    },
  } = props
  const $state = useMemo<React.ReactNode>(() => {
    if(!state) return null
    if(state.length === 2) {
      const name = stateAbbrs[state]
      if(name) {
        return <abbr title={name}>{state}</abbr>
      }
    }
    return state
  }, [state])
  return (
    <span>{city + (state ? ', ' : '')}{$state}</span>
  )
}

export default Address
