import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { AppBar, Drawer, Hidden, IconButton } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'

import BadExperienceDetect from 'components/BadExperienceDetect'
import Footer from 'components/Footer'
import Header from 'components/Header'
import WelcomeLogger from 'components/WelcomeLogger'
import { IInformationDensityContext } from 'contexts/InformationDensityContext'
import ResumeMetadata from 'data/ResumeMetadata'

import InformationDensityContextProvider from './InformationDensityContextProvider'
import { LeftNav } from './LeftNav'

import styles from './Layout.module.css'

const drawerWidth = 340

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
      alignSelf: 'flex-start',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    fixedNav: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      height: '100%',
      width: drawerWidth,
      // backgroundColor: theme.palette.background.paper,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    main: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      flexGrow: 1,
      marginTop: theme.mixins.toolbar.minHeight,
      [theme.breakpoints.up('md')]: {
        marginLeft: drawerWidth,
      },
    },
    appBar: {
      boxShadow: 'none',
      paddingLeft: theme.spacing(3),
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
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <InformationDensityContextProvider initialDensity={densityProps.density}>
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
      <div className={styles.container}>
        <nav aria-label="filters" className="no-print">
          <Hidden mdUp implementation="css">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <LeftNav />
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <div className={classes.fixedNav}>
              <LeftNav />
            </div>
          </Hidden>
        </nav>
        <main className={clsx(styles.main, classes.main)}>
          <BadExperienceDetect />
          <AppBar
            position="fixed"
            color="transparent"
            className={clsx(classes.appBar, 'no-print')}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </AppBar>
          <Header {...ResumeMetadata} />
          {children}
          <Footer />
        </main>
      </div>
    </InformationDensityContextProvider>
  )
}

export default Layout
