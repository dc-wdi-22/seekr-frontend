import React, {Component} from 'react'
import JobDetails from './JobDetails'
import NewJob from './NewJob'
import Main from './Main'
import Axios from 'axios'
import {CLIENT_URL} from '../constants.js'

// const example = [{
//   'pk': 1,
//   'company': {
//     'pk': 1,
//     'name': 'Apple',
//     'industry': 'Information Technology',
//     'address': 'Cupertino, CA',
//     'url': 'https://www.apple.com/',
//     'glassdoor_link': 'https://www.glassdoor.com/Overview/Working-at-Apple-EI_IE1138.11,16.htm',
//     'jobs': [
//       'http://localhost:8000/job/2',
//       'http://localhost:8000/job/1'
//     ]
//   },
//   'title': 'Technical Specialist',
//   'description': 'You help new owners get started and current ones get quick, efficient support — developing strong, positive relationships with Apple. ',
//   'requirements': 'Ability to assess customers\\’ support needs when they arrive, then provide solutions or refer them to other team members. ',
//   'salary_range_start': 36000,
//   'salary_range_end': 50000,
//   'source': 'glassdoor',
//   'notes': 'yes',
//   'date_posted': '2018-02-12',
//   'todo_list': [
//     {
//       'status': false,
//       'name': 'Set up app',
//       'pk': 1
//     }],
//   'job_status': 'Applied'
// }]

class ModalConductor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      jobDetailsModal: false,
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
    this.setState({newJobModal: true})
  }

  closeNewJob () {
    this.setState({newJobModal: false})
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
        {this.state.jobDetailsModal && <JobDetails isOpen={this.state.jobDetailsModal} onRequestClose={this.closeJobDetails} job={this.state.targetJob} todos={this.state.todos} updatePage={this.updatePage} />}

        {this.state.newJobModal && <NewJob isOpen={this.state.newJobModal} onRequestClose={this.closeNewJob} />}
      </div>

    )
  }
}

export default ModalConductor
