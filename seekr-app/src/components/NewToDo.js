import React, {Component} from 'react'
import axios from 'axios'
import {CLIENT_URL} from '../constants.js'

class NewToDo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      status: false,
      job: this.props.job.pk
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleChange (event) {
    const value = event.target.value
    this.setState({
      name: value
    })
  }

  submit (event) {
    console.log('submit clicked')
    event.preventDefault()
    event.target.value = ''
    axios
      .post(`${CLIENT_URL}todos`, {
        name: this.state.name,
        status: this.state.status,
        job: this.state.job
      })
      .then(res => {
        this.props.updatePage()
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <form onSubmit={this.submit}>
          <label>New To Do:</label>
          <input type='text' name='newToDo' onChange={this.handleChange} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default NewToDo
