import { ICompany } from './Company'

export const companies: ICompany[] = [
  {
    id: 'testoil',
    name: 'TestOil',
    website: new URL('https://testoil.com'),
    address: {
      street: '20338 Progress Dr.',
      city: 'Strongsville',
      state: 'OH',
      ZIP: '44149',
    },
  },
  {
    id: 'dealertire',
    name: 'Dealer Tire',
    website: new URL('https://dealertire.com'),
    address: {
      street: '7012 Euclid Ave.',
      city: 'Cleveland',
      state: 'OH',
      ZIP: '44103',
    },
  },
  {
    id: 'roundtable',
    name: 'Roundtable Learning',
    website: new URL('https://www.roundtablelearning.com/'),
    address: {
      street: '8401 Chagrin Rd.',
      city: 'Chagrin Falls',
      state: 'OH',
      ZIP: '44023',
    },
  },
  {
    id: 'va',
    name: 'US Veterans Administration',
    website: new URL('https://www.va.gov/'),
    address: {
      city: 'Brecksville',
      state: 'OH',
      ZIP: '44141',
    },
  },
  {
    id: 'knowbase',
    name: 'Knowbase Networks, Inc',
    address: {
      city: 'Cleveland Heights',
      state: 'OH',
      ZIP: '44104',
    },
  },
]

export default companies
