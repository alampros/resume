import React, { useEffect, useState } from 'react'

import Job from 'data/Job'
import jobs from 'data/jobs'
import { ISkill } from 'data/Skill'
import { skills } from 'data/skills'

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

export const WelcomeLogger: React.FC = () => {
  const [logged, setLogged] = useState(false)
  useEffect(() => {
    if(typeof window !== 'undefined') {
      if(!logged) {
        console.log(msg(consoleBit), skills, jobs) // eslint-disable-line no-console
        setLogged(true)
      }
      window.Aaron = {
        skills,
        jobs,
      }
    }
  }, [logged])
  return null
}

export default WelcomeLogger
