import { IAddress } from 'data/Address'

export interface ICompany {
  id: string
  name: string
  address: IAddress
  website?: URL
}
