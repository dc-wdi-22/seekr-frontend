import React, {Component} from 'react'

class ToDo extends Component {
  constructor (props) {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange () {
    console.log('checkbox clicked')
  }

  render () {
    return (
      <div>
        <input type='checkbox' value={this.props.item.status} name={this.props.item.name} onChange={this.handleChange} />
        <label>{this.props.item.name}</label>
      </div>
    )
  }
}

export default ToDo
