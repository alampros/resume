import React from 'react'
import cx from 'classnames'
import { ICompany } from 'data/companies/Company'
const styles = require('./Company.module.css')

interface Props extends ICompany {
}

export default class Company extends React.Component<Props & React.HTMLProps<HTMLDivElement>> {
  render() {
    const {
      id, // eslint-disable-line no-unused-vars, @typescript-eslint/no-unused-vars
      name,
      address,
      website,
      className,
      ...passedProps
    } = this.props
    return (
      <div className={cx(className, styles.root)} {...passedProps}>
        <div className={styles.name}>{name}</div>
        <address>
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
