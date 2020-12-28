import React from 'react'
import { SegmentedControl } from 'evergreen-ui'

import { InformationDensity } from 'contexts/InformationDensity'

const initialState = {
  options: [
    { label: 'Sparse', value: 'sparse' },
    { label: 'Normal', value: 'normal' },
    { label: 'Dense', value: 'dense' },
  ],
}

type TProps = {
  density: InformationDensity
  onDensityChange(_density: InformationDensity): void
}

export const DensitySelect: React.FC<TProps> = (props: TProps) => {
  const { density, onDensityChange } = props
  return (
    <SegmentedControl
      name="density"
      height={24}
      options={initialState.options}
      value={density}
      onChange={onDensityChange}
    />
  )
}
export default DensitySelect
