import * as React from 'react'
import cx from 'classnames'
import { MdPictureAsPdf } from 'react-icons/md'
import { GoMarkGithub } from 'react-icons/go'
import { QRCode } from 'react-qr-svg'
const styles = require('./Footer.module.css')

export default class Footer extends React.Component {
  render() {
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
        <small>&copy; Aaron Lampros</small>
        <small><a href="https://alampros.com">alampros.com</a></small>
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
}
