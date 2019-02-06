import * as React from 'react'
import Layout from 'components/Layout'
import Jobs from 'components/JobsProvider'
import Objective from 'components/Objective'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Objective />
        <Jobs />
      </Layout>
    )
  }
}
