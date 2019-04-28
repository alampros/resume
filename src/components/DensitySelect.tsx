import React, { useState } from 'react'
import { SegmentedControl } from 'evergreen-ui'

const initialState = {
  options: [
    { label: 'Sparse', value: 'sparse' },
    { label: 'Normal', value: 'normal' },
    { label: 'Dense', value: 'dense' },
  ],
  value: 'normal',
}

export default function DensitySelect(): JSX.Element {
  const [state, setState] = useState(initialState.value)
  return (
    <SegmentedControl
      name="density"
      height={24}
      options={initialState.options}
      value={state}
      onChange={(value: string) => {
        setState(value)
      }}
    />
  )
}
