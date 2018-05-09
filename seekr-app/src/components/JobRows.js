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
    console.log('testing', this.props.filter)
    let filteredRows = this.props.jobs.filter((job) => {
      console.log(this.props.filter)
      return job.job_status === this.props.filter
    })

    this.setState({rows: filteredRows})
  }

  render () {
    return (
      <div className='jobRow'>
        <h1 className='jobFilter'>{this.props.filter}</h1>
        {this.props.jobs.map(job => <SingleJob job={job} />)}
      </div>
    )
  }
}

export default JobRows
