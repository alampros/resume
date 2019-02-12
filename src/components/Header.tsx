import * as React from 'react'
import cx from 'classnames'
import {
  Button,
  Pane,
} from 'evergreen-ui'
import Address from 'components/Address'
import { IResumeMetadata } from 'data/ResumeMetadata'
import { MdPermPhoneMsg, MdMyLocation, MdEmail } from 'react-icons/md'
import { GoMarkGithub } from 'react-icons/go'
const styles = require('./Header.module.css')

interface Props extends IResumeMetadata {
}

export default class Header extends React.Component<Props> {
  render() {
    const {
      location,
      phone,
      email,
      firstName,
      middleName,
      lastName,
      github,
    } = this.props
    const middle = middleName && middleName.length === 1 ? middleName + '.' : middleName
    return (
      <header className={styles.root}>
        <Pane
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <span>
            <h1 className={styles.name} aria-label={`${firstName} ${middle} ${lastName}`}>
              <span aria-hidden>{firstName}</span><span aria-hidden>{middle}</span><span aria-hidden>{lastName}</span>
            </h1>
            <small>User Experience Architect</small>
          </span>
          <Pane
            className={styles.contact}
            display="flex"
            flexDirection="row"
          >
            <address>
              <div>
                <MdMyLocation />
                <Address address={location} />
              </div>
              <div>
                <MdPermPhoneMsg />
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
              <div>
                <GoMarkGithub />
                <a href={`https://github.com/${github}`}>github.com/alampros</a>
              </div>
              <div>
                <MdEmail />
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </address>
          </Pane>
        </Pane>
        <div
          className={cx('no-print', styles.actions)}
          role="menubar"
        >
          <Button
            is="a"
            href="/resume-alampros.pdf"
            appearance="minimal"
            iconBefore="download"
          >
            <span className={styles.shadow}>
              Download PDF
            </span>
          </Button>
          <Button
            is="a"
            href="/Aaron Lampros.vcf"
            appearance="minimal"
            iconBefore="user"
          >
            <span className={styles.shadow}>
            Add me to your contacts
            </span>
          </Button>
        </div>
      </header>
    )
  }
}
