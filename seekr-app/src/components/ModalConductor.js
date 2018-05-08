import React, {Component} from 'react'
import JobDetails from './JobDetails'

const example = [{
    "company": {
        "name": "Apple",
        "industry": "Information Technology",
        "address": "Cupertino, CA",
        "url": "https://www.apple.com/",
        "glassdoor_link": "https://www.glassdoor.com/Overview/Working-at-Apple-EI_IE1138.11,16.htm",
        "jobs": [
            "http://localhost:8000/job/2",
            "http://localhost:8000/job/1"
        ]
      },
    "title": "Technical Specialist",
    "description": "You help new owners get started and current ones get quick, efficient support — developing strong, positive relationships with Apple. ",
    "requirements": "Ability to assess customers\\’ support needs when they arrive, then provide solutions or refer them to other team members. ",
    "salary_range_start": 36000,
    "salary_range_end": 50000,
    "source": "glassdoor",
    "notes": "yes",
    "date_posted": "2018-02-12",
    "todo_list": [
      {
        "status": false,
        "name": "Set up app"
      }],
    "job_status": "Applied"
    }]

class ModalConductor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      jobDetailsModal: false
    }
    this.openJobDetails = this.openJobDetails.bind(this)
    this.closeJobDetails = this.closeJobDetails.bind(this)
  }
  openJobDetails () {
    this.setState({jobDetailsModal: true})
  }

  closeJobDetails () {
    this.setState({jobDetailsModal: false})
  }

  render () {
    return (
      <div>
        <button onClick={this.openJobDetails}>Job Details</button>
        {this.state.jobDetailsModal && <JobDetails isOpen={this.state.jobDetailsModal} onRequestClose={this.closeJobDetails} example={example} />}
      </div>
    )
  }
}

export default ModalConductor
