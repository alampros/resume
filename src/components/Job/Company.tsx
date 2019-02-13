import React from 'react'
import cx from 'classnames'
import { ICompany } from 'data/Company'
import Address from 'components/Address'
import { IJobDescriptor } from 'data/Job'
const styles = require('./Company.module.css')

type JobParts = Pick<IJobDescriptor, 'department'>

interface Props extends ICompany {
}

const Sep = () => <span className={styles.separator} role="none" aria-hidden>◦</span>

export default class Company extends React.Component<Props & JobParts & React.HTMLProps<HTMLDivElement>> {
  render() {
    const {
      id, // eslint-disable-line no-unused-vars, @typescript-eslint/no-unused-vars
      name,
      address,
      website,
      className,
      department,
      ...passedProps
    } = this.props
    return (
      <div className={cx(className, styles.root)} {...passedProps}>
        <span className={styles.at}>@</span>
        <div className={styles.name} aria-label="Company">{name}</div>
        <Sep />
        {department && (
          <>
            <span
              className={styles.department}
              aria-label="Department"
            >
              {department}
            </span>
            <Sep />
          </>
        )}
        <address aria-label="Location">
          <Address address={address} />
        </address>
        {website && (
          <>
            <Sep />
            <a href={website.toString()} aria-label="Company website">{website.hostname.replace(/^www\./, '')}</a>
          </>
        )}
      </div>
    )
  }
}
