import React, {Component} from 'react'

class Singlejob extends Component {
  render () {
    const rows = this.props.jobs.map( (job,i) => {
      return (
      <div key={i}>
        <h3>{job.title}</h3>
        <h3>{job.company}</h3>
        <h3>{job.location}</h3>
        <h3>{job.url}</h3>
        <h3>{job.closing_data}</h3>
        <h3>{job.requirements}</h3>
        <h3>{job.salary_range}</h3>
        <h3>{job.pt_contact}</h3>
        <h3>{job.source}</h3>
      </div>
      )
    })
    return (
      <h1>Singlejob Component</h1>
    )
  }
}

export default Singlejob
