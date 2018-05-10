import React, {Component} from 'react'

class Sidebar extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='sidebar'>
        <ul>
          <h4>Companies Applied To</h4>
          {this.props.companies.map(company => <li className='joblist'><a href={company.url}>{company.name}</a></li>)}
        </ul>
      </div>
    )
  }
}

export default Sidebar
