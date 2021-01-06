import React, { useContext } from 'react'
import { useTheme } from '@material-ui/core'
import { AnimatePresence, motion } from 'framer-motion'

import DateRange from 'components/DateRange'
import { InformationDensityContext } from 'contexts/InformationDensityContext'
import { IJobDescriptor } from 'data/Job'

import Company from './Company'
import JobSkills from './JobSkills'
import Project from './Project'

import styles from './Job.module.css'

type TProps = IJobDescriptor

export const Job: React.FC<TProps> = (props: TProps) => {
  const {
    title,
    company,
    department,
    description,
    projects,
    date,
    skills,
  } = props
  const {
    density,
  } = useContext(InformationDensityContext)
  const theme = useTheme()

  const $projects = density === 'sparse'
    ? null
    : projects.map(project => (
      <Project key={project.description} project={project} />
    ))

  return (
    <article className={styles.root}>
      <header style={{ paddingTop: theme.mixins.toolbar.minHeight }}>
        <h3 aria-label={title}>{title}</h3>
        <DateRange {...date} className={styles.dateRange} />
        <Company {...company} department={department} className={styles.company} />
      </header>
      {description && (
        <>
          <h4>Primary Responsibilities:</h4>
          <div className={styles.desc}>{description}</div>
        </>
      )}
      <JobSkills skills={skills} />
      <AnimatePresence>
        {$projects && $projects.length > 0 && (
          <motion.div
            key={`projects-${company.name}-${title}`}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
          >
            <h4>Notable Projects:</h4>
            <ul className={styles.projects}>
              {$projects}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export default Job
