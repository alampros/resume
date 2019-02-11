import * as React from 'react'
import ResumeMetadata from 'data/ResumeMetadata'
import { Helmet } from 'react-helmet'
import Header from 'components/Header'
import WelcomeLogger from 'components/WelcomeLogger'
import BadExperienceDetect from 'components/BadExperienceDetect'
import Footer from 'components/Footer'

const styles = require('./Layout.module.css')

type Props = {
  children: React.ReactNode
}
export default class Layout extends React.Component<Props> {
  render() {
    const {
      children,
    } = this.props
    // If this were more than one page, these would be props
    const title = 'Aaron Lampros | Resume'
    const description = 'The resume of Aaron Lampros: User Experience Architect'
    return (
      <>
        <WelcomeLogger />
        <main className={styles.main}>
          <Helmet>
            <html lang="en" />
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <div className={styles.container}>
            <BadExperienceDetect />
            <Header {...ResumeMetadata} />
            {children}
            <Footer />
          </div>
        </main>
      </>
    )
  }
}
