import React, {Component} from 'react'
import axios from 'axios'
import ToDos from './ToDos'

import { CLIENT_URL } from '../constants'

class NewToDos extends Component {
  constructor (props) {
    super(props)
    this.State = {
      name: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  onSubmit (event) {
    event.preventDefault()
    console.log('todo submit clicked', this.state)

    // axios.put() {
    //   status: 
    // }
  }

  render () {
    return (
      <div className='formcontainer'>
        <form onSubmit={this.onSubmit}>
          New To Do Item:
          <input onChange={this.onChange} type='text' name='todolist' />
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

export default NewToDos
