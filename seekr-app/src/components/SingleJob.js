import React, {Component} from 'react'
import './Main.css'

class Singlejob extends Component {
  render () {
    return (
      <div className='single'>
        <h3>{this.props.job.company.name}</h3>
        <h4>{this.props.job.title}</h4>
      </div>
    )
  }
}

export default Singlejob
