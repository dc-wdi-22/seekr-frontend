import React, {Component} from 'react'

import JobRows from './JobRows'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

import './Main.css'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      jobsApplied: [],
      jobsFirstContact: [],
      jobsInterview: [],
      jobsOffer: [],
      jobsRejected: []
    }
  }

  render () {
    let jobsApplied = this.props.jobs.filter(job => job.job_status === 'Applied')
    let jobsFirstContact = this.props.jobs.filter(job => job.job_status === 'First Contact')
    let jobsInterview = this.props.jobs.filter(job => job.job_status === 'Interview')
    let jobsOffer = this.props.jobs.filter(job => job.job_status === 'Offer')
    let jobsRejected = this.props.jobs.filter(job => job.job_status === 'Rejected')
    return (
      <div className='body'>
        <Navbar openNewCompany={this.props.openNewCompany} openNewJob={this.props.openNewJob} />
        <div className='grid-container'>
          <div>
            <JobRows openJobDetails={this.props.openJobDetails} name='Applied' jobs={jobsApplied} companies={this.props.companies} />
            <JobRows openJobDetails={this.props.openJobDetails} name='First Contact' jobs={jobsFirstContact} companies={this.props.companies} />
            <JobRows openJobDetails={this.props.openJobDetails} name='Interview' jobs={jobsInterview} companies={this.props.companies} />
            <JobRows openJobDetails={this.props.openJobDetails} name='Offer' jobs={jobsOffer} companies={this.props.companies} />
            <JobRows openJobDetails={this.props.openJobDetails} name='Rejected' jobs={jobsRejected} companies={this.props.companies} />
          </div>
          <div>
            <Sidebar companies={this.props.companies} />
          </div>
        </div>
      </div>
    )
  }
}

export default Main
