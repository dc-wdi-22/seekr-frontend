import React, {Component} from 'react'
import SingleJob from './SingleJob'

class JobRows extends Component {
 render () {
    return (
      <div >
        <h1 className='jobStatus'>{this.props.name}</h1>
        <div className='jobsgrid-container'>
          {this.props.jobs.map((job,i) => <SingleJob key={i} openJobDetails={this.props.openJobDetails} companies={this.props.companies} job={job} />)}
        </div>
      </div>
    )
  }
}

export default JobRows
