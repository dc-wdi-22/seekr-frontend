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
      putRequest: false,
      company: '',
      title: '',
      description: '',
      requirements: '',
      salary_range_start: 40000,
      salary_range_end: 60000,
      source: '',
      notes: '',
      date_posted: '2018-01-01',
      job_status: 'Applied',
      companyDropDown: []
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  onChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name

    console.log('changing', name, value)

    // if (name == "date_posted") {
    //   if (value.indexOf('/') > 0 ) {
    //     let date = value.split('/')
    //     let dateValue = `${date[2]}-${date[1]}-${date[0]}`

    //     console.log('date-Value:', dateValue)
    //     this.setState({date_posted_formatted : dateValue})
    //   }

    //   this.setState({
    //     [name]: value
    //   })

    // } else {
    //   this.setState({
    //     [name]: value
    //   })
    // }

    this.setState({
      [name]: value
    })
  }

  componentDidMount () {
    console.log('put request variable', this.state.putRequest)
    if (this.props.job) {
      this.setState({
        ...this.props.job
      })

      this.setState({putRequest: true})
    }
    let dropDown = this.props.companies.map((company) => {
      return [company.name, company.pk]
    })

    this.setState({companyDropDown: dropDown}
    , () => console.log(this.state.companyDropDown))

  }

  handleClick (event) {
    event.preventDefault()

    axios.delete(`${CLIENT_URL}job/${this.props.job.pk}`)
      .then(res => {
        console.log(res)
        console.log(res.data)
        this.props.updatePage()
      })
    this.props.onRequestClose()
  }
  
  onSubmit (event) {
    event.preventDefault()

    let formData = this.state


    if (!this.state.putRequest) {
      console.log('new job')
      axios.post(`${CLIENT_URL}jobs`, {
        title: formData.title,
        description: formData.description,
        requirements: formData.requirements,
        salary_range_start: parseInt(formData.salary_range_start, 10),
        salary_range_end: parseInt(formData.salary_range_end, 10),
        source: formData.source,
        notes: formData.notes,
        date_posted: formData.date_posted,
        job_status: formData.job_status,
        company: formData.company
      })
        .then(res => {
          console.log(res.data)
          this.props.updatePage()
        })
        .catch(data => {
          console.log(data)
        })
    } else {
          console.log(this.state.putRequest)
          console.log('editing rather than posting')
      axios.put(`${CLIENT_URL}job/${this.props.job.pk}`, {
        title: formData.title,
        description: formData.description,
        requirements: formData.requirements,
        salary_range_start: parseInt(formData.salary_range_start, 10),
        salary_range_end: parseInt(formData.salary_range_end, 10),
        source: formData.source,
        notes: formData.notes,
        date_posted: formData.date_posted,
        job_status: formData.job_status,
        company: formData.company
      })
        .then(res => {
          this.props.updatePage()
        })
        .catch(data => {
          console.log(data)
        })
    }
    this.props.onRequestClose() 
  }

  render () {
    console.log('company drop down', this.state.companyDropDown)
    let companyDropDown = this.state.companyDropDown.map((company) => <option value={company[1]}> {company[0]}</option>)
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        style={customStyles}
        contentLabel='Example Modal'
        className='newjobmodal'
      >
        <div className='formcontainer'>

          <form className='newjobform' onSubmit={this.onSubmit}>
              <label>Company</label>
              <select onChange={this.onChange} value={this.state.company} name='company'>
                {companyDropDown}
              </select>

            <input placeholder='Job Title' onChange={this.onChange} value={this.state.title} type='text' name='title' />

            <input placeholder='Date Posted' onChange={this.onChange} value={this.state.date_posted} type='text' name='date_posted' />

            <input placeholder='Job Description' onChange={this.onChange} value={this.state.description} type='text' name='description' />

            <input placeholder='Min-salary' onChange={this.onChange} value={this.state.salary_range_start} type='text' name='salary_range_start' />
            <input placeholder='Max-salary' onChange={this.onChange} value={this.state.salary_range_end} type='text' name='salary_range_end' />

            <input placeholder='Source' onChange={this.onChange} value={this.state.source} type='text' name='source' />

            <input placeholder='Requirements' onChange={this.onChange} value={this.state.requirements} type='text' name='requirements' />
            <input placeholder='Notes' onChange={this.onChange} value={this.state.notes} type='text' name='notes' />
            <div>
              <label className='statuslabel'>Job Status:</label>
              <select value={this.state.job_status} onChange={this.onChange} name='job_status'>
                <option value='Applied'>Applied</option>
                <option value='First Contact'>First Contact</option>
                <option value='Interview'>Interview</option>
                <option value='Offer'>Offer</option>
                <option value='Rejected'>Rejected</option>
              </select>
            </div>

            <input className='newjobbutton' type='submit' value='Submit' />
            <button onClick={this.handleClick} className='newjobbutton' type='submit'>Delete</button>
          </form>

        </div>
      </Modal>
    )
  }
}

export default NewJob
