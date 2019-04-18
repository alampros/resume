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
      skills = [],
    } = project
    const $title = title && <strong>{title}</strong>
    const $skills = skills.length > 0 ? (
      <figure>
        <figcaption>Leveraged Skills</figcaption>
        <ul className={styles.skills}>
          {skills.map(skill => <li key={skill.id}><JobSkill skill={skill} /></li>)}
        </ul>
      </figure>
    ) : null
    return (
      <li className={styles.project}>
        {$title}
        <div className={styles.flexWrapper}>
          {description && <div className={styles.description}>{description}</div>}
          <div className={styles.figures}>
            {project.skillsetRatings && Object.keys(project.skillsetRatings).length > 0 && (
              <figure>
                <figcaption>Leveraged Skill Sets</figcaption>
                <ProjectSkillsetsVis project={project} />
              </figure>
            )}
            {$skills}
          </div>
        </div>
      </li>
    )
  }
}
