import React, {Component} from 'react'
import JobDetails from './JobDetails'
import NewJob from './NewJob'
import Main from './Main'
import Axios from 'axios'
import {CLIENT_URL} from '../constants.js'
import NewCompany from './NewCompany'

class ModalConductor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      jobDetailsModal: false,
      currentJobData: {},
      targetJob: null,
      newJobModal: false,
      newCompanyModal: false,
      todos: [],
      jobs: [],
      companies: []

    }
    this.openJobDetails = this.openJobDetails.bind(this)
    this.closeJobDetails = this.closeJobDetails.bind(this)
    this.openNewJob = this.openNewJob.bind(this)
    this.closeNewJob = this.closeNewJob.bind(this)
    this.updatePage = this.updatePage.bind(this)
    this.openNewCompany = this.openNewCompany.bind(this)
    this.closeNewCompany = this.closeNewCompany.bind(this)
  }
  openJobDetails (target, event) {
    this.setState({
      jobDetailsModal: true,
      targetJob: target
    })
  }

  closeJobDetails () {
    this.setState({
      jobDetailsModal: false,
      targetJob: {}
    })
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

  openNewCompany () {
    this.setState({newCompanyModal: true})
  }

  closeNewCompany () {
    this.setState({newCompanyModal: false})
  }

  updatePage () {
    let getJobs = () => Axios.get(`${CLIENT_URL}jobs`)
    let getCompanies = () => Axios.get(`${CLIENT_URL}companies`)
    let getTodos = () => Axios.get(`${CLIENT_URL}todos`)

    getJobs()
      .then((jobsResponse) => {
        getCompanies()
          .then((companiesResponse) => {
            getTodos()
              .then((todosResponse) => {
                this.setState({
                  jobs: jobsResponse.data,
                  companies: companiesResponse.data,
                  todos: todosResponse.data
                })
              })
          })
      })
  }

  componentDidMount () {
    this.updatePage()
  }

  render () {
    console.log('Modal Conductor rendering', this.state)
    return (
      <div>
        <Main openJobDetails={this.openJobDetails} openNewJob={this.openNewJob} openNewCompany={this.openNewCompany} jobs={this.state.jobs} companies={this.state.companies} />

        {this.state.jobDetailsModal && <JobDetails isOpen={this.state.jobDetailsModal} openNewJob={this.openNewJob} openNewCompany={this.openNewCompany} onRequestClose={this.closeJobDetails} job={this.state.targetJob} todos={this.state.todos} companies={this.state.companies} updatePage={this.updatePage} />}

        {this.state.newJobModal && <NewJob isOpen={this.state.newJobModal} onRequestClose={this.closeNewJob} job={this.state.targetJob} updatePage={this.updatePage} />}

        {this.state.newCompanyModal && <NewCompany isOpen={this.state.newCompanyModal} onRequestClose={this.closeNewCompany} job={this.state.targetJob} updatePage={this.updatePage} companies={this.state.companies} />}

      </div>

    )
  }
}

export default ModalConductor
