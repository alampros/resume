import * as React from 'react'
import ResumeMetadata from 'data/ResumeMetadata'
import { Helmet } from 'react-helmet'
import Header from 'components/Header'
import Jobs from 'components/Jobs'
import jobs from 'data/jobs'

export default class IndexPage extends React.Component {
  render() {
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
