import React, {Component} from 'react'

class Sidebar extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <ul>
          <li>Test</li>
          {this.props.companies.map(company => <li><a href={company.url}>{company.name}</a></li>)}
        </ul>
      </div>
    )
  }
}

export default Sidebar
