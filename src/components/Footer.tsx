import * as React from 'react'
import { GoMarkGithub } from 'react-icons/go'
import { MdPictureAsPdf } from 'react-icons/md'
import { QRCode } from 'react-qr-svg'
import cx from 'classnames'

import useSiteMetadata from 'hooks/useSiteMetadata'

import styles from './Footer.module.css'

export const Footer: React.FC = () => {
  const {
    branch,
    shortHash,
    lastUpdated,
  } = useSiteMetadata()
  return (
    <footer className={styles.root}>
      <a href="https://github.com/alampros/resume" className={styles.ghLink}>
        <GoMarkGithub />
        <span>View the source for this site</span>
      </a>
      <a href="/resume-alampros.pdf" className={cx('no-print', styles.resumeLink)}>
        <MdPictureAsPdf />
        Download my resume (<abbr title="Portable Document Format">PDF</abbr>)
      </a>
      <small>&copy; 2020 Aaron Lampros</small>
      <small><a href="https://alampros.com">alampros.com</a></small>
      <small className={styles.dim}>–</small>
      <small className={styles.dim}>{branch}@{shortHash}</small>
      <small className={styles.dim}>Last updated: {lastUpdated.toLocaleDateString()}</small>
      <QRCode
          bgColor="transparent"
          fgColor="#000000"
          level="Q"
          style={{ width: 64 }}
          value="https://alampros.com"
          cellClassPrefix="qr"
          className={cx(styles.qr, 'no-screen')}
      />
    </footer>
  )
}

export default Footer
