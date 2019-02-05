import Job from './Job'

const jobs: Job[] = [
  new Job({
    title: 'User Experience Architect',
    company: 'roundtable',
    date: {
      start: new Date('2018-05-14T12:00:00.000Z'),
    },
  }),
  new Job({
    title: 'Product Designer',
    company: 'dealertire',
    date: {
      start: new Date('2017-11-01T12:00:00.000Z'),
      end: new Date('2018-05-11T22:00:00.000Z'),
    },
  }),
]

export default jobs
