import React, {Component} from 'react'

class Singlejob extends Component {
  render () {
    return (
      <div>
        <h3>{this.props.job.company.name}</h3>
        <h4>{this.props.job.title}</h4>
      </div>
    )
  }
}

export default Singlejob
