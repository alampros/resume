import * as React from 'react'
import cx from 'classnames'
import { IAddress } from 'data/ResumeMetadata'
const styles = require('./Address.module.css')

interface Props {
  address: IAddress
}

export default class Address extends React.Component<Props> {
  render() {
    const {
      address: {
        city,
        state,
        ZIP,
      },
    } = this.props
    return (
      <span className={cx(styles.root, 'h-adr')}>
        <span className="p-locality">{city}</span>
        <span className="p-region">{state}</span>
        <span className="p-postal-code">{ZIP}</span>
      </span>
    )
  }
}
