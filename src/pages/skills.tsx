import * as React from 'react'

import AllSkills from 'components/AllSkills'
import Layout from 'components/Layout'
import skillsById from 'data/skills'

const skills = Object.values(skillsById)
export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout
        title="Skills"
        helmetKids={
          <link rel="canonical" href="https://alampros.com/skills/index.html" />
        }
      >
        <AllSkills skills={skills} />
      </Layout>
    )
  }
}
