import React, {Component} from 'react'
import axios from 'axios'
import {CLIENT_URL} from '../constants.js'

class ToDo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      status: this.props.item.status,
      name: this.props.item.name,
      job: this.props.item.job
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
      .put(`${CLIENT_URL}todos/${this.props.item.pk}`, {
        status: this.state.status,
        name: this.state.name,
        job: this.state.job
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <input type='checkbox' checked={this.state.status} name={this.state.name} onChange={this.handleChange} />
        <label className='checkboxlabel'>{this.props.item.name}</label>
      </div>
    )
  }
}

export default ToDo
