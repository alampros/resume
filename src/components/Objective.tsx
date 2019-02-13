import * as React from 'react'
import ResumeMetadata from 'data/ResumeMetadata'

export default (props: any) => {
  return (
    <span {...props}>{ResumeMetadata.objective}</span>
  )
}
