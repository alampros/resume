import * as React from 'react'

import ResumeMetadata from 'data/ResumeMetadata'

type TProps = React.HTMLAttributes<HTMLDivElement>
export default (props: TProps) => {
  const {
    objective,
  } = ResumeMetadata
  const ps = objective.split('\n').map(p => <p key={p}>{p}</p>)
  return (
    <span {...props}>{ps}</span>
  )
}
