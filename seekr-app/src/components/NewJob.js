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

let blankCompany = {
  'pk': '6',
  'name': 'UNASSIGNED',
  'industry': 'none',
  'address': 'none',
  'url': 'none',
  'glassdoor_link': 'none'
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
    console.log(formData)
    axios.post(`${CLIENT_URL}jobs`, {
      title: formData.title,
      description: formData.description,
      requirements: formData.requirements,
      salary_range_start: parseInt(formData.salary_range_start),
      salary_range_end: parseInt(formData.salary_range_end),
      source: formData.source,
      notes: formData.notes,
      date_posted: formData.data_posted,
      job_status: formData.job_status,
      company: formData.company

      // "company": 1,
      // "title": "Front",
      // "description": "n",
      // "requirements": "n",
      // "salary_range_start": 50,
      // "salary_range_end": 60,
      // "source": "friend",
      // "notes": "notes",
      // "date_posted": "2000-12-01",
      // "job_status": "Applied"

    })
      .then(res => {
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
        className='newjobmodal'
      >
        <div className='formcontainer'>

          <form onSubmit={this.onSubmit}>
        Company Name:
            <input onChange={this.onChange} value={this.state.company} type='text' name='company' />
        Job Title:
            <input onChange={this.onChange} value={this.state.title} type='text' name='title' />
        Date Posted:
            <input onChange={this.onChange} value={this.state.date_posted} type='text' name='date_posted' />
        Job Description:
            <input onChange={this.onChange} value={this.state.description} type='text' name='description' />
        Salary Range:
            <input onChange={this.onChange} value={this.state.salary_range_start} type='text' name='salary_range_start' />
            <input onChange={this.onChange} value={this.state.salary_range_end} type='text' name='salary_range_end' />
        Source:
            <input onChange={this.onChange} value={this.state.source} type='text' name='source' />
        Requirements:
            <input onChange={this.onChange} value={this.state.requirements} type='text' name='requirements' />
        Job Status:
            <input onChange={this.onChange} value={this.state.job_status} type='text' name='job_status' />
        Notes:
            <input type='submit' value='submit' />
          </form>

        </div>
      </Modal>
    )
  }
}

export default NewJob
