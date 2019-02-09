/* eslint-disable import/first */
require('module-alias/register')
import getJobs from './get-jobs'

console.log('make-pdf dir index called')

const jobs = getJobs()
console.log(jobs)
