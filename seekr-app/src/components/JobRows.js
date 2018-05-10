import React, {Component} from 'react'
import SingleJob from './SingleJob'

class JobRows extends Component {
  constructor () {
    super()
    this.state = {
      rows: []
    }
  }
  componentDidMount () {
    let filteredRows = this.props.jobs.filter((job) => {
      return job.job_status === this.props.filter
    })

    this.setState({rows: filteredRows})
  }

  render () {
    return (
      <div >
        <h1 className='jobStatus'>{this.props.filter}</h1>
        <div className='jobsgrid-container'>
          {this.props.jobs.map(job => <SingleJob openJobDetails={this.props.openJobDetails} job={job} />)}
        </div>
      </div>
    )
  }
}

export default JobRows
