import * as React from 'react'
import jobs from 'data/jobs'
import Job from 'data/Jobs/Job'
import skills from 'data/skills'
import { ISkill } from 'data/Skill'

declare global {
  interface Window {
    Aaron: {
      jobs: Job[]
      skills: { [id: string]: ISkill }
    }
  }
}

const msg = (middleBit: string = ''): string => `\n\n\n
Hi there 👋

Welcome to my resume! It looks like you know your way around the developer console. If that's more your style, here's some data about me:

${middleBit}
Feel free to explore some data about me using \`window.Aaron\`.
\n\n\n\n`
const consoleBit = '\tSkills: %O\n\tJobs: %O\n'

export default class WelcomeLogger extends React.Component {
  logged?: boolean
  render() {
    if(typeof window !== 'undefined') {
      if(!this.logged) {
        this.logged = true
        console.log(msg(consoleBit), skills, jobs) // eslint-disable-line no-console
      }
      window.Aaron = {
        skills,
        jobs,
      }
    }
    return null
  }
}
