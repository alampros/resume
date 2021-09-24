import * as React from 'react'
import { GoFilePdf, GoMarkGithub, GoPerson } from 'react-icons/go'
import { MdEmail, MdMyLocation, MdPermPhoneMsg } from 'react-icons/md'
import clsx from 'clsx'

import Address from 'components/Address'
import Objective from 'components/Objective'
import { IResumeMetadata } from 'data/ResumeMetadata'

import * as styles from './Header.module.css'

declare global {
  interface Window {
    IntersectionObserver: typeof IntersectionObserver
  }
}

type TProps = IResumeMetadata
const Actions = () => {
  return (
    <div
      className={clsx('no-print', styles.actions)}
      role="menubar"
    >
      <a href="/Aaron Lampros.vcf">
        <span className={styles.shadow}>
          <GoPerson />
          Add me to your contacts
        </span>
      </a>
      <a href="/resume-alampros.pdf">
        <span className={styles.shadow}>
          <GoFilePdf />
          Download PDF
        </span>
      </a>
    </div>
  )
}

const Contact = (props: TProps) => {
  const {
    location,
    phone,
    email,
    github,
  } = props
  return (
    <address
      className={styles.contact}
      role="complementary"
    >
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
  )
}

const Name = (props: TProps) => {
  const {
    firstName,
    middleName,
    lastName,
  } = props
  const middle = middleName && middleName.length === 1 ? middleName + '.' : middleName
  return (
    <h1 aria-label={`${firstName} ${middle} ${lastName}`}>
      <span aria-hidden>{firstName}</span><span aria-hidden>{middle}</span><span aria-hidden>{lastName}</span>
    </h1>
  )
}

export const Header: React.FC<TProps> = (props: TProps) => {
  return (
    <header className={styles.root}>
      <div className={styles.rowOne}>
        <Name {...props} />
        <Objective className={styles.objective} />
      </div>
      <div className={styles.rowTwo}>
        <Actions />
        <Contact {...props} />
      </div>
    </header>
  )
}

export default Header
