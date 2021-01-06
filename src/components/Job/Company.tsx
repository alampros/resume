import React from 'react'
import clsx from 'clsx'

import Address from 'components/Address'
import { ICompany } from 'data/Company'
import { IJobDescriptor } from 'data/Job'

import styles from './Company.module.css'

type JobParts = Pick<IJobDescriptor, 'department'>

type TProps = ICompany & JobParts & React.HTMLProps<HTMLDivElement>

const Sep = () => <span className={styles.separator} role="none" aria-hidden>◦</span>

export const Company: React.FC<TProps> = (props: TProps) => {
  const {
    id, // eslint-disable-line no-unused-vars, @typescript-eslint/no-unused-vars
    name,
    address,
    website,
    className,
    department,
    ...passedProps
  } = props
  return (
    <div className={clsx(className, styles.root)} {...passedProps}>
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

export default Company
