/* eslint-disable import/first */
require('module-alias/register')
import getJobs from './get-jobs'
import render from './render'

console.log('make-pdf dir index called')

const jobs = getJobs()
render(jobs)
