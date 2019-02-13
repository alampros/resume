import * as React from 'react'
import Layout from 'components/Layout'
import JobsProvider from 'components/JobsProvider'
import Job from 'data/Jobs/Job'
import Jobs from 'components/Jobs'
import AllSkills from 'components/AllSkills'
import skillsById from 'data/skills'

const skills = Object.values(skillsById)
export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <JobsProvider
          render={(jobs: Job[]) => (<Jobs jobs={jobs} />)}
        />
        <hr />
        <AllSkills skills={skills} />
      </Layout>
    )
  }
}
