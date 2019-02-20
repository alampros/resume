import * as React from 'react'
import cx from 'classnames'
import {
  Button,
  Pane,
} from 'evergreen-ui'
import { useInView } from 'react-intersection-observer'
import Address from 'components/Address'
import { IResumeMetadata } from 'data/ResumeMetadata'
import { MdPermPhoneMsg, MdMyLocation, MdEmail } from 'react-icons/md'
import { GoMarkGithub } from 'react-icons/go'
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
    <Pane
      className={styles.contact}
      is="address"
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
    </Pane>
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
        <Pane
          display="flex"
          className={styles.rowOne}
        >
          <Name {...this.props} />
          <Objective className={styles.objective} />
        </Pane>
        <Pane
          display="flex"
          className={styles.rowTwo}
        >
          <Actions />
          <Contact {...this.props} />
        </Pane>
      </header>
    )
  }
}
