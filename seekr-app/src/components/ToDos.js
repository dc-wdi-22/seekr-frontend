import React, {Component} from 'react'
import axios from 'axios'

class ToDo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      status: this.props.item.status,
      name: this.props.item.name
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    let newStatus = e.target.checked
    this.setState({
      status: newStatus
    })
  }

  componentDidUpdate () {
    axios
      .put(`http://demo-seekr.herokuapp.com/todos/${this.props.item.pk}`, {
        status: this.state.status,
        name: this.state.name
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <input type='checkbox' checked={this.state.status} name={this.state.name} onChange={this.handleChange} />
        <label>{this.props.item.name}</label>
      </div>
    )
  }
}

export default ToDo
