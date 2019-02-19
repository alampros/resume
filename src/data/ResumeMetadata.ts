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
  objective: 'User Experience Architect and full-stack web developer with 18 years professional experience, seeking a position with a focused, technology-oriented company committed to maintaining a modern, accessible, and performant web property.',
  website: new URL('https://alampros.com'),
  github: 'alampros',
}

export default ResumeMetadata
