import { IAddress } from './Address'

export interface IResumeMetadata {
  firstName: string
  middleName: string
  lastName: string
  title: string
  email: string
  phone: string
  location: IAddress
  objective: string
  website: URL
  github: string
}

const ResumeMetadata: IResumeMetadata = {
  firstName: 'Aaron',
  middleName: 'J.',
  lastName: 'Lampros',
  title: 'User Experience Architect',
  location: {
    city: 'Cleveland',
    state: 'OH',
  },
  phone: '+1-216-246-3832',
  email: 'alampros@gmail.com',
  objective: `Systems Architect and senior web developer with 19 years professional experience, seeking a position with a focused, technology-oriented company committed to maintaining a modern, accessible, and performant web property.
  More specifically, I'm looking for a small enough company where I can contribute to application development at all levels: systems architecture, database, services, and user experience.
  I want to build systems to help people.`,
  website: new URL('https://alampros.com'),
  github: 'alampros',
}

export default ResumeMetadata
