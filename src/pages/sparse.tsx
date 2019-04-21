import * as React from 'react'
import Layout from 'components/Layout'
import allJobs from 'data/jobs'
import Jobs from 'components/Jobs'
import AllSkills from 'components/AllSkills'
import skillsById from 'data/skills'

const skills = Object.values(skillsById)
export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout densityProps={{ density: 'sparse' }}>
        <Jobs jobs={allJobs} />
        <hr />
        <AllSkills skills={skills} />
      </Layout>
    )
  }
}
