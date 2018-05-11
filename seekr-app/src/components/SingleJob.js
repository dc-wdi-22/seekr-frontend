import React, {Component} from 'react'
import './Main.css'

class Singlejob extends Component {
  company = {
    name: ''
  }
  componentWillReceiveProps(){
  }
  render () {
    this.company = (this.props.companies.filter(company => company.pk === this.props.job.company))[0]
    return (
      <div onClick={this.props.openJobDetails.bind(this, this.props.job)} className='centered'>
        <button className='singleJob' type='button'>
          <h3>{this.company.name}</h3>
            <h5>{this.props.job.title}</h5>
        </button>
      </div>
    )
  }
}

export default Singlejob
