import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import BadExperienceDetect from 'components/BadExperienceDetect'
import Footer from 'components/Footer'
import Header from 'components/Header'
import WelcomeLogger from 'components/WelcomeLogger'
import { IInformationDensityContext, InformationDensityContext } from 'contexts/InformationDensity'
import ResumeMetadata from 'data/ResumeMetadata'

import Toolbar from './Toolbar'

import styles from './Layout.module.css'

type Props = {
  children: React.ReactNode
  title?: string
  description?: string
  helmetKids?: React.ReactNode
  densityProps?: IInformationDensityContext
}

export default ({
  children,
  title = 'Resume',
  description = 'The resume of Aaron Lampros: User Experience Architect',
  helmetKids,
  densityProps = { density: 'normal' },
}: Props) => {
  const [density, setDensity] = useState(densityProps.density)
  return (
    <InformationDensityContext.Provider value={{ density }}>
      <WelcomeLogger />
      <Helmet
        titleTemplate="Aaron Lampros | %s"
        defaultTitle="Resume"
      >
        <html lang="en" className={'density-' + densityProps.density} />
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
        {helmetKids}
      </Helmet>
      <main className={styles.main}>
        <div className={styles.container}>
          <BadExperienceDetect />
          <Header {...ResumeMetadata} />
          <Toolbar density={density} onDensityChange={setDensity} />
          {children}
          <Footer />
        </div>
      </main>
    </InformationDensityContext.Provider>
  )
}
