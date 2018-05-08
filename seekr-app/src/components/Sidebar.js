import React, {Component} from 'react'

class Sidebar extends Component {
  constructor (props) {
    super(props) 
    this.state = {
      row: ''
    }
  }

  componentWillReceiveProps(){
    const rows = this.props.companies.map( (job,i) => {
      return (
        <div key={i}>
          <li><a href={job.url}>{job.company}</a></li>
        </div>
      )
    })
    this.setState({row: rows})
  }
  render () {
    return (
      <div>
        <ul>
          {this.state.row}
        </ul>
      </div>
    )
  }
}

export default Sidebar