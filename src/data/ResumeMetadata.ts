import { IAddress } from 'data/Address'

export interface IResumeMetadata {
  email: string
  phone: string
  address: IAddress
  objective: string
}

const ResumeMetadata: IResumeMetadata = {
  address: {
    city: 'Cleveland Heights',
    state: 'OH',
    ZIP: '44118',
  },
  phone: '+1-216-246-3832',
  email: 'alampros@gmail.com',
  objective: 'Systems Architect and User Experience Developer with 18 years professional experience, seeking a position with a small, focused, technology-oriented company. Interested in implementing and building my portfolio of technologies, languages, and techniques, learning new techniques to provide effective and innovative solutions.',
}

export default ResumeMetadata
