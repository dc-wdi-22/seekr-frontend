import React, {Component} from 'react'

class Sidebar extends Component {
  render () {
    return (
      <div className='sidebar'>
        <ul>
          <h4>Companies Applied To</h4>
          {this.props.companies.map((company, i) => <li key={i} className='joblist'><a href={company.url} target='_blank'>{company.name}</a></li>)}
        </ul>
      </div>
    )
  }
}

export default Sidebar
