import * as React from 'react'
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
    } = this.props
    return (
      <header className={styles.root}>
        <div>
          <h1>{'Aaron J. \nLampros'}</h1>
          <small>User Experience Architect</small>
        </div>
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
            <a href="https://github.com/alampros">github.com/alampros</a>
          </div>
          <div>
            <MdEmail />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </address>
      </header>
    )
  }
}
