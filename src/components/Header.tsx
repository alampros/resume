import * as React from 'react'
import { IResumeMetadata } from 'data/ResumeMetadata'
import Address from 'components/Address'
import { MdPermPhoneMsg, MdMyLocation, MdEmail } from 'react-icons/md'
const styles = require('./Header.module.css')

interface Props extends IResumeMetadata {
}

export default class Header extends React.Component<Props> {
  render() {
    const {
      address,
      phone,
      email,
    } = this.props
    return (
      <header className={styles.root}>
        <h1>Aaron Lampros</h1>
        <address>
          <div>
            <MdMyLocation />
            <Address address={address} />
          </div>
          <div>
            <MdPermPhoneMsg />
            <a href={`tel:${phone}`}>{phone}</a>
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
