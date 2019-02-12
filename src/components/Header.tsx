import * as React from 'react'
import cx from 'classnames'
import {
  Button,
  Pane,
} from 'evergreen-ui'
import { IResumeMetadata } from 'data/ResumeMetadata'
import { MdPermPhoneMsg, MdMyLocation, MdEmail, MdPictureAsPdf, MdPermContactCalendar } from 'react-icons/md'
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
    const nonEvergreenIconStyles = {
      width: '1.25em',
      height: '1.25em',
      marginRight: '0.5em',
    }
    return (
      <header className={styles.root}>
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
          <Pane
            className={cx('no-print', styles.actions)}
            display="flex"
            flexDirection="column"
            borderRight="default"
            alignItems="flex-end"
            justifyContent="center"
          >
            <Button
              is="a"
              href="/resume-alampros.pdf"
              appearance="minimal"
            >
              <MdPictureAsPdf style={nonEvergreenIconStyles} />
              resume.pdf
            </Button>
            <Button
              is="a"
              href="/Aaron Lampros.vcf"
              appearance="minimal"
            >
              <MdPermContactCalendar style={nonEvergreenIconStyles} />
              Add me to your contacts
            </Button>
          </Pane>
          <address>
            <div>
              <MdMyLocation />
              <span>{location}</span>
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
      </header>
    )
  }
}
