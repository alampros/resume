import React from 'react'
import cx from 'classnames'
import { ICompany } from 'data/companies/Company'
import { IJobDescriptor } from 'data/jobs/Job'
const styles = require('./Company.module.css')

type JobParts = Pick<IJobDescriptor, 'department'>

interface Props extends ICompany {
}

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
        <div className={styles.name} aria-label="Company name">{name}</div>
        {department && <div title={`${department} Department`} className={styles.department} aria-label="Department">{department}</div>}
        <address aria-label="Address">
          {address.city}, {address.state}
        </address>
        {website && (
          <div>
            <a href={website.toString()}>{website.hostname.replace(/^www\./, '')}</a>
          </div>
        )}
      </div>
    )
  }
}
