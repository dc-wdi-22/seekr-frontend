import React,{Component} from 'react'

class JobRows extends Component {
  constructor(){
    super()
    this.state = {
      rows: []
    }
  }
  componentDidMount(){
    console.log('testing', this.props.filter)
    let filteredRows = this.props.jobs.filter( (job) => {      
      console.log(this.props.filter)
      return job.job_status === this.props.filter
    })

    this.setState({rows: filteredRows })
 }

  render () {
    let renderedRows = this.state.rows.map( (job,i) => {
      return (
        <li className="job" key={i}>
          <p>{job.company.name}</p>
          <p>{job.title}</p>
          <p>{job.job_status}</p>
        </li>
      )
   })
    return(
      <div>
        <div className="job-row">
          <ul className="job-container">
          { renderedRows }
          </ul>
        </div>
      </div>
    )
  }
}

export default JobRows
