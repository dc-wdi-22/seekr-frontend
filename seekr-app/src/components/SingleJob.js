import React, {Component} from 'react'
import './Main.css'

class Singlejob extends Component {
  render () {
    return (
      <div className='centered'>
        <button className='singleJob' type='button'>
          {/* <h3>{this.props.job.company.name}</h3>
          <h5>{this.props.job.title}</h5> */}
        </button>
      </div>
    )
  }
}

export default Singlejob
