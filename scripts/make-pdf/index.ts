/* eslint-disable import/first */
require('module-alias/register')
import getJobs from './get-jobs'
import render from './render'

const jobs = getJobs()
render(jobs)
