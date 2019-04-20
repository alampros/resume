import React from 'react'
import { IProject } from 'data/Project'
import ProjectSkillsetsVis from './ProjectSkillsetsVis'
import JobSkill from './JobSkill'
const styles = require('./Job.module.css')

interface Props {
  project: IProject
}

export default class Project extends React.Component<Props> {
  render() {
    const {
      project,
    } = this.props
    const {
      title,
      description,
      descriptionDetail,
      skills = [],
    } = project
    const $title = title && <h5 className="bordered-header">{title}</h5>
    const $skills = skills.length > 0 ? (
      <ul className={styles.skills}>
        {skills.map(skill => <li key={skill.id}><JobSkill skill={skill} /></li>)}
      </ul>
    ) : null
    const $skillSets = project.skillsetRatings && Object.keys(project.skillsetRatings).length > 0 && (
      <ProjectSkillsetsVis project={project} className={styles.skillSetsVis} />
    )
    const desc = descriptionDetail || description
    const $description = desc && (
      <div className={styles.description}>{desc}</div>
    )
    return (
      <li className={styles.project}>
        <div className={styles.flexWrapper}>
          {($title || $description) ? (
            <div>
              {$title}
              {$description}
            </div>
          ) : null}
          {($skills && $skillSets) ? (
            <figure className={styles.figure}>
              <figcaption className="sr-only bordered-header">Leveraged Skills</figcaption>
              {$skillSets}
              {$skills}
            </figure>
          ) : null}
        </div>
      </li>
    )
  }
}
