import * as React from 'react'

import AllSkills from 'components/AllSkills'
import Jobs from 'components/Jobs'
import Layout from 'components/Layout'
import allJobs from 'data/jobs'
import { skills as skillsById } from 'data/skills'

const skills = Object.values(skillsById)
export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout densityProps={{ density: 'dense' }}>
        <Jobs jobs={allJobs} />
        <hr />
        <AllSkills skills={skills} />
      </Layout>
    )
  }
}
