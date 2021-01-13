import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { AppBar, Container, Drawer, Hidden, IconButton } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'

import BadExperienceDetect from 'components/BadExperienceDetect'
import Footer from 'components/Footer'
import Header from 'components/Header'
import WelcomeLogger from 'components/WelcomeLogger'
import { IInformationDensityContext } from 'contexts/InformationDensityContext'
import ResumeMetadata from 'data/ResumeMetadata'

import { DateFilterContextProvider } from './DateFilterContextProvider'
import InformationDensityContextProvider from './InformationDensityContextProvider'
import { LeftNav } from './LeftNav'

const drawerWidth = 340

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      alignContent: 'stretch',
      justifyContent: 'stretch',
      justifyItems: 'stretch',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      alignSelf: 'flex-start',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      flexGrow: 1,
      marginTop: theme.mixins.toolbar.minHeight,
      [theme.breakpoints.up('md')]: {
        // marginLeft: drawerWidth,
      },
    },
    fixedNavContainer: {
      position: 'relative',
      flexGrow: 1,
      flexShrink: 0,
      height: '100%',
      width: drawerWidth,
      // backgroundColor: theme.palette.background.paper,
    },
    fixedNav: {
      // height: '100%',
      position: 'sticky',
      top: 300,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    appBar: {
      boxShadow: 'none',
      width: '3em',
      left: 0,
      paddingLeft: '11px',
      paddingTop: '5px',
    },
  })
)

type TProps = {
  children: React.ReactNode
  title?: string
  description?: string
  helmetKids?: React.ReactNode
  densityProps?: Pick<IInformationDensityContext, 'density'>
}

export const Layout: React.FC<TProps> = ({
  children,
  title = 'Resume',
  description = 'The resume of Aaron Lampros: User Experience Architect',
  helmetKids,
  densityProps = { density: 'normal' },
}: TProps) => {
  const styles = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <InformationDensityContextProvider initialDensity={densityProps.density}>
      <DateFilterContextProvider>
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
        <Container className={styles.container}>
          <nav aria-label="filters" className="no-print">
            <Hidden mdUp implementation="css">
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: styles.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                <LeftNav />
              </Drawer>
            </Hidden>
            {/* @ts-ignore */}
            <Hidden smDown implementation="css" className={styles.fixedNavContainer}>
              <LeftNav className={styles.fixedNav} />
            </Hidden>
          </nav>
          <main className={styles.main}>
            <BadExperienceDetect />
            <AppBar
              position="fixed"
              color="transparent"
              className={clsx(styles.appBar, 'no-print')}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={styles.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </AppBar>
            <Header {...ResumeMetadata} />
            {children}
            <Footer />
          </main>
        </Container>
      </DateFilterContextProvider>
    </InformationDensityContextProvider>
  )
}

export default Layout
