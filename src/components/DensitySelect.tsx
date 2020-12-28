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

interface Props {
  density: InformationDensity
  onDensityChange(_density: InformationDensity): void
}

export default function DensitySelect({ density, onDensityChange }: Props): React.ReactElement {
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
