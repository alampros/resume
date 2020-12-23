import * as React from 'react'

import { IAddress } from 'data/Address'

const stateAbbrs: { [stateName: string]: string } = {
  OH: 'Ohio',
}

interface Props {
  address: Partial<IAddress>
}

export default class Address extends React.Component<Props & React.HTMLProps<HTMLSpanElement>> {
  renderState = (state?: string): React.ReactNode => {
    if(!state) return null
    if(state.length === 2) {
      const name = stateAbbrs[state]
      if(name) {
        return <abbr title={name}>{state}</abbr>
      }
    }
    return state
  }

  render() {
    const {
      address: {
        city,
        state,
      },
    } = this.props
    const $state = this.renderState(state)
    return (
      <span>{city + (state ? ', ' : '')}{$state}</span>
    )
  }
}
