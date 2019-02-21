import * as React from 'react'
import cx from 'classnames'
import { useInView } from 'react-intersection-observer'
import Address from 'components/Address'
import { IResumeMetadata } from 'data/ResumeMetadata'
import { MdPermPhoneMsg, MdMyLocation, MdEmail } from 'react-icons/md'
import { GoMarkGithub, GoPerson, GoFilePdf } from 'react-icons/go'
import Objective from 'components/Objective'
import ToggleDarkMode from 'components/ToggleDarkMode'

const styles = require('./Header.module.css')

declare global {
  interface Window {
    IntersectionObserver: typeof IntersectionObserver
  }
}

async function loadPolyfills() {
  if(typeof window !== 'undefined' && typeof window.IntersectionObserver === 'undefined') {
    // @ts-ignore
    await import('intersection-observer')
  }
}

loadPolyfills()

interface Props extends IResumeMetadata {
}

const Actions = () => {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={cx('no-print', { 'off-screen': !inView }, styles.actions)}
      role="menubar"
    >
      <div className={styles.darkToggle}>
        <ToggleDarkMode />
      </div>
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

const Contact = (props: Props) => {
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

const Name = (props: Props) => {
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

export default class Header extends React.Component<Props> {
  render() {
    return (
      <header className={styles.root}>
        <div className={styles.rowOne}>
          <Name {...this.props} />
          <Objective className={styles.objective} />
        </div>
        <div className={styles.rowTwo}>
          <Actions />
          <Contact {...this.props} />
        </div>
      </header>
    )
  }
}
