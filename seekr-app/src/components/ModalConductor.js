import React, {Component} from 'react'
import JobDetails from './JobDetails'
import NewJob from './NewJob'
import Main from './Main'
import Axios from 'axios'
import {CLIENT_URL} from '../constants.js'

class ModalConductor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      jobDetailsModal: false,
      currentJobData: {},
      targetJob: {},
      newJobModal: false,
      todos: [],
      jobs: [],
      companies: []
    }
    this.openJobDetails = this.openJobDetails.bind(this)
    this.closeJobDetails = this.closeJobDetails.bind(this)
    this.openNewJob = this.openNewJob.bind(this)
    this.closeNewJob = this.closeNewJob.bind(this)
    this.updatePage = this.updatePage.bind(this)
  }
  openJobDetails (target, event) {
    this.setState({
      jobDetailsModal: true,
      targetJob: target
    })
  }

  closeJobDetails () {
    this.setState({jobDetailsModal: false})
  }

  openNewJob () {
    if (this.state.jobDetailsModal) {
      this.setState({jobDetailsModal: false})
    }
    this.setState({newJobModal: true})
  }

  closeNewJob () {
    this.setState({
      newJobModal: false,
      targetJob: {}
    })
  }

  updatePage () {
    Axios.get(`${CLIENT_URL}jobs`)
      .then((response) => {
        this.setState({
          jobs: response.data
        })
      })
    Axios.get(`${CLIENT_URL}companies`)
      .then((response) => {
        this.setState({companies: response.data})
      })
    Axios.get(`${CLIENT_URL}todos`)
      .then((response) => {
        this.setState({todos: response.data})
      })
  }

  componentDidMount () {
    this.updatePage()
  }

  render () {
    console.log('Modal Conductor rendering', this.state)
    return (
      <div>
        <Main openJobDetails={this.openJobDetails} openNewJob={this.openNewJob} jobs={this.state.jobs} companies={this.state.companies} />

        {this.state.jobDetailsModal && <JobDetails isOpen={this.state.jobDetailsModal} openNewJob={this.openNewJob} onRequestClose={this.closeJobDetails} job={this.state.targetJob} todos={this.state.todos} updatePage={this.updatePage} />}

        {this.state.newJobModal && <NewJob isOpen={this.state.newJobModal} onRequestClose={this.closeNewJob} job={this.state.targetJob} />}

      </div>

    )
  }
}

export default ModalConductor
