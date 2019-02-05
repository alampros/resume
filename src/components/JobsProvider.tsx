import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { IMarkdownNode } from 'data/GatsbyTypes'
import { getJobsWithDescriptions } from 'data/jobs'
import Jobs from 'components/Jobs'

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: IMarkdownNode
      }[]
    },
  }
}

class JobsProvider extends React.Component<Props> {
  render() {
    const {
      data: {
        allMarkdownRemark: {
          edges,
        },
      },
    } = this.props
    const getJobDescription = (descId?: string): IMarkdownNode => {
      const node = edges.map(edge => edge.node).find(({ fileAbsolutePath }) => {
        const pathParts = fileAbsolutePath.split('/')
        const bname = pathParts[pathParts.length - 1].split('.')[0]
        return descId === bname
      })
      if(!node) {
        return
      }
      const {
        fileAbsolutePath, //eslint-disable-line
        ...rest
      } = node
      return {
        ...rest,
      }
    }
    const jobs = getJobsWithDescriptions(getJobDescription)
    return (
      <Jobs jobs={jobs} />
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark{
          edges{
            node{
              fileAbsolutePath
              rawMarkdownBody
              html
            }
          }
        }
      }
    `}
    render={data => <JobsProvider data={data} {...props} />}
  />
)
