import * as React from 'react'
import Layout from 'components/Layout'
import JobsProvider from 'components/JobsProvider'
import Job from 'data/Jobs/Job'
import Jobs from 'components/Jobs'
import Objective from 'components/Objective'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Objective />
        <JobsProvider
          render={(jobs: Job[]) => (<Jobs jobs={jobs} />)}
        />
      </Layout>
    )
  }
}
