import * as React from 'react'
import Layout from 'components/Layout'
import AllSkills from 'components/AllSkills'
import skillsById from 'data/skills'

const skills = Object.values(skillsById)
export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <AllSkills skills={skills} />
      </Layout>
    )
  }
}
