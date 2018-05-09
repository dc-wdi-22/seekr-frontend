import React, {Component} from 'react'
import Modal from 'react-modal'
import axios from 'axios'

import '../Modal.css'

import { CLIENT_URL } from '../constants'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

class NewJob extends Component {
  constructor () {
    super()

    this.state = {
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
    console.log('testing')

    let formData = this.state
    let JOB_URL = CLIENT_URL + 'jobs'

    axios.post(JOB_URL, formData)
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
      .catch(data => {
        console.log(data)
      })
  }

  render () {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div className='formcontainer'>

          <form onSubmit={this.onSubmit}>
        Company Name:
            <input onChange={this.onChange} value={this.state.companyname} type='text' name='companyname' />
        Job Title:
            <input onChange={this.onChange} value={this.state.jobtitle} type='text' name='jobtitle' />
        Date Posted:
            <input onChange={this.onChange} value={this.state.dateposted} type='text' name='dateposted' />
        Job Description:
            <input onChange={this.onChange} value={this.state.jobdescription} type='text' name='jobdescription' />
        Salary:
            <input onChange={this.onChange} value={this.state.salary} type='text' name='salary' />
        Source:
            <input onChange={this.onChange} value={this.state.source} type='text' name='source' />
        Job Requirements:
            <input onChange={this.onChange} value={this.state.jobrequirements} type='text' name='jobrequirements' />
        Notes:
            <input onChange={this.onChange} value={this.state.notes} type='text' name='notes' />
        To Do List:
            <input onChange={this.onChange} value={this.state.todolist} type='text' name='todolist' />
            <input type='submit' value='submit' />
          </form>

        </div>
      </Modal>
    )
  }
}

export default NewJob
