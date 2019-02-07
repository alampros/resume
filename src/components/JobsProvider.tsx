import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { IMarkdownNode } from 'data/GatsbyTypes'
import { getJobsWithDescriptions } from 'data/jobs'
import Job from 'data/jobs/Job'

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: IMarkdownNode
      }[]
    },
  }
  render: (jobs: Job[]) => JSX.Element
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
    const getJobDescription = (descId?: string): IMarkdownNode | void => {
      const node = edges.map(edge => edge.node).find(({ fileAbsolutePath }) => {
        try {
          if(!fileAbsolutePath) {
            return false
          }
          const pathParts = fileAbsolutePath.split('/')
          const bname = pathParts[pathParts.length - 1].split('.')[0]
          return descId === bname
        } catch(err) {
          return false
        }
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
    return this.props.render(jobs)
  }
}

export default (props: any) => (
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
