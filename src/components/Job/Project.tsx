import React from 'react'
import { IProject } from 'data/Project'
import ProjectSkillsetsVis from './ProjectSkillsetsVis'
import JobSkill from './JobSkill'
import { InformationDensityContext } from 'contexts/InformationDensity'
const styles = require('./Job.module.css')

interface Props {
  project: IProject
}

export default class Project extends React.Component<Props> {
  static contextType = InformationDensityContext
  render() {
    const {
      project,
    } = this.props
    const {
      density,
    } = this.context
    const {
      title,
      description,
      descriptionDetail,
      skills = [],
    } = project
    const $title = density !== 'sparse' && title && <h5 className="bordered-header">{title}</h5>
    const $skills = (density === 'dense' && skills.length > 0) ? (
      <ul className={styles.skills}>
        {skills.map(skill => <li key={skill.id}><JobSkill skill={skill} /></li>)}
      </ul>
    ) : null
    const $skillSets = density === 'dense' && project.skillsetRatings && Object.keys(project.skillsetRatings).length > 0 && (
      <ProjectSkillsetsVis project={project} className={styles.skillSetsVis} />
    )
    const desc = density === 'sparse' ? description : descriptionDetail || description
    const $description = desc && (
      <div className={styles.description}>{desc}</div>
    )
    const $skillsFigure = ($skills || $skillSets) ? (
      <figure className={styles.figure}>
        <figcaption className="sr-only bordered-header">Leveraged Skills</figcaption>
        {$skillSets}
        {$skills}
      </figure>
    ) : null
    const $wrappedTitleDescription = ($title && $description) ? (
      <div>
        {$title}
        {$description}
      </div>
    ) : (
      <>
        {$title}
        {$description}
      </>
    )
    return (
      <li className={styles.project}>
        {($wrappedTitleDescription && $skillsFigure) ? (
          <div className={styles.flexWrapper}>
            {$wrappedTitleDescription}
            {$skillsFigure}
          </div>
        ) : (
          <>
            {$wrappedTitleDescription}
            {$skillsFigure}
          </>
        )}
      </li>
    )
  }
}
