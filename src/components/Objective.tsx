import * as React from 'react'
import ResumeMetadata from 'data/ResumeMetadata'

interface Props {
  objective: string
}

export default class Header extends React.Component<Props> {
  static defaultProps = {
    objective: ResumeMetadata.objective,
  }
  render() {
    const {
      objective,
    } = this.props
    return (
      <section>
        <h2>Objective</h2>
        <p>{objective}</p>
      </section>
    )
  }
}
