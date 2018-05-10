import React, {Component} from 'react'
import JobDetails from './JobDetails'
import NewJob from './NewJob'
import Main from './Main'

class ModalConductor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      jobDetailsModal: false,
      targetJob: {},
      newJobModal: false
    }
    this.openJobDetails = this.openJobDetails.bind(this)
    this.closeJobDetails = this.closeJobDetails.bind(this)
    this.openNewJob = this.openNewJob.bind(this)
    this.closeNewJob = this.closeNewJob.bind(this)
  }
  openJobDetails (target, event) {
    console.log('event:', event)
    console.log('target:', target)
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

  render () {
    console.log(this.state)
    return (
      <div>
        <Main openJobDetails={this.openJobDetails} openNewJob={this.openNewJob} />
        <button onClick={this.openJobDetails}>Job Details</button>
        {this.state.jobDetailsModal && <JobDetails isOpen={this.state.jobDetailsModal} onRequestClose={this.closeJobDetails} job={this.state.targetJob} />}

        <button onClick={this.openNewJob}>Add Job</button>
        {this.state.newJobModal && <NewJob isOpen={this.state.newJobModal} onRequestClose={this.closeNewJob} />}
      </div>

    )
  }
}

export default ModalConductor
