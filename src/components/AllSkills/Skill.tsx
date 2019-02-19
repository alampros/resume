import React from 'react'
import cx from 'classnames'
import {
  Pane,
  Card,
  Text,
  Icon,
} from 'evergreen-ui'
import { GoLinkExternal } from 'react-icons/go'
import { ISkill } from 'data/Skill'
import StrengthRating from './StrengthRating'
import ExperienceRating from './ExperienceRating'

const styles = require('./Skill.module.css')

interface Props {
  skill: ISkill
  timeBeforeStale: number
}

export default class Skill extends React.Component<Props & any> {
  static defaultProps = {
    timeBeforeStale: 1000 * 60 * 60 * 24 * 365, // 1 yr,
  }
  render() {
    const {
      skill: {
        name,
        yearsOfExperience,
        link,
        strength,
        lastUsed,
        link2LD,
      },
      timeBeforeStale,
      className,
      ...passedProps
    } = this.props

    let $stale
    if(lastUsed) {
      const now = new Date()
      const timeSinceLastUsed = new Date(now.getFullYear(), now.getMonth()).getTime() - lastUsed.getTime()

      if(timeSinceLastUsed > timeBeforeStale) {
        const staleFormatter = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
        })
        $stale = (
          <Pane
            is="small"
            display="flex"
            alignItems="center"
            marginBottom="0.5em"
          >
            <Icon icon="warning-sign" color="warning" marginRight="0.75em" />
            <Text color="warning">Last used {staleFormatter.format(lastUsed)}</Text>
          </Pane>
        )
      }
    }

    return (
      <Card
        className={cx(styles.root, className)}
        border="default"
        marginRight="1rem"
        marginBottom="1rem"
        elevation={1}
        flex={1}
        display="flex"
        flexDirection="column"
        paddingY="0.333em"
        paddingX="0.5em"
        flexBasis="14em"
        borderRadius={3}
        {...passedProps}
      >
        <Pane
          display="flex"
          alignItems="baseline"
          flexWrap="nowrap"
          marginBottom="0.5em"
        >
          <Pane
            marginRight="1em"
            flex={1}
          >
            {name}
          </Pane>
          {link && (
            <Pane
              is="small"
              flex={1}
            >
              <Pane
                is="a"
                href={link.toString()}
                flex={1}
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                flexWrap="nowrap"
                whiteSpace="nowrap"
              >
                {link2LD || link.host}
                <GoLinkExternal style={{ marginLeft: '0.5em' }} />
              </Pane>
            </Pane>
          )}
        </Pane>
        {$stale}
        <Pane
          display="flex"
          justifyContent="space-between"
          marginTop="auto"
        >
          <ExperienceRating
            yearsOfExperience={yearsOfExperience}
            name={name}
            className={styles.rating}
            flexWrap="nowrap"
            flex={1}
            marginRight="0.5em"
          />
          <StrengthRating
            name={name}
            strength={strength}
            className={styles.rating}
            flex={3}
          />
        </Pane>
      </Card>
    )
  }
}
