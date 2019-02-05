import * as path from 'path'
import * as React from 'react'
import ResumeMetadata from 'data/ResumeMetadata'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Header from 'components/Header'
import Jobs from 'components/Jobs'
import { getJobsWithDescriptions } from 'data/jobs'
import { IMarkdownNode } from 'data/GatsbyTypes'

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: IMarkdownNode
      }[]
    },
  }
}

export default class IndexPage extends React.Component<Props> {
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
        const bname = path.basename(fileAbsolutePath, path.extname(fileAbsolutePath))
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
    console.log('Jobs:', jobs)

    // If this were more than one page, these would be props
    const title = 'Aaron Lampros | Resume'
    const description = 'The resume of Aaron Lampros: User Experience Architect'
    return (
      <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="canonical" href="https://alampros.com/index.html" />
          <meta name="description" content={description} />
          {/* OpenGraph stuff */}
          <meta property="og:image" content="https://alampros.com/aaron-sm.jpg" />
          <meta property="og:image:secure_url" content="https://alampros.com/aaron-sm.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="500" />
          <meta property="og:image:height" content="500" />
          <meta property="og:image:alt" content="Caricature of Aaron Lampros" />
          {/* Schema.org for google stuff */}
          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={description} />
          <meta itemProp="image" content="https://alampros.com/aaron-sm.jpg" />
          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@alampros" />
        </Helmet>
        <Header {...ResumeMetadata} />
        <Jobs jobs={jobs} />
      </main>
    )
  }
}

export const query = graphql`
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
`
