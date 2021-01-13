import React, { useContext } from 'react'
import { useTheme } from '@material-ui/core'
import clsx from 'clsx'
import { AnimatePresence, motion, MotionProps } from 'framer-motion'

import DateRange from 'components/DateRange'
import { DateFilterContext } from 'contexts/DateFilterContext'
import { InformationDensityContext } from 'contexts/InformationDensityContext'
import { IJobDescriptor } from 'data/Job'
import { filterDateRange } from 'data/utils'

import Company from './Company'
import { FilteredProjectsIndicator } from './FilteredProjectsIndicator'
import JobSkills from './JobSkills'
import Project from './Project'

import styles from './Job.module.css'

type TProps = {
  job: IJobDescriptor
  className?: string
} & MotionProps

export const Job: React.FC<TProps> = (props: TProps) => {
  const {
    job: {
      title,
      company,
      department,
      description,
      projects,
      date,
      skills,
    },
    className,
    ...motionProps
  } = props
  const {
    density,
  } = useContext(InformationDensityContext)
  const { from, to } = useContext(DateFilterContext)
  const theme = useTheme()

  const $projects = density === 'sparse'
    ? null
    : projects
      .filter(p => filterDateRange(p.date, { start: from, end: to }))
      .map(project => (
        <Project key={project.description} project={project} />
      ))
  const $filteredProjectsIndicator = $projects && $projects.length < projects.length && (
    <FilteredProjectsIndicator numberFiltered={projects.length - $projects?.length} key="filtered-indicator" />
  )

  return (
    <motion.article className={clsx(className, styles.root)} {...motionProps}>
      <header style={{ top: theme.mixins.toolbar.minHeight }}>
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
      <AnimatePresence key="job-projects-density">
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
              <AnimatePresence key="job-projects">
                {$projects}
                {$filteredProjectsIndicator}
              </AnimatePresence>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export default Job
