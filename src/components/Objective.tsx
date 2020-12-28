import React from 'react'

import ResumeMetadata from 'data/ResumeMetadata'

type TProps = React.HTMLAttributes<HTMLDivElement>
export const Objective: React.FC<TProps> = (props: TProps) => {
  const {
    objective,
  } = ResumeMetadata
  const ps = objective.split('\n').map(p => <p key={p}>{p}</p>)
  return (
    <span {...props}>{ps}</span>
  )
}

export default Objective
