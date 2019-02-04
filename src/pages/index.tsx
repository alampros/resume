import * as React from 'react'
import ResumeMetadata from 'data/ResumeMetadata'
import Header from 'components/Header'

export default class IndexPage extends React.Component {
  render() {
    return (
      <main>
        <Header {...ResumeMetadata} />
      </main>
    )
  }
}
