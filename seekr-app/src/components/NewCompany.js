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

class NewCompany extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      industry: '',
      address: '',
      url: '',
      glassdoor_link: '',
      jobs: []
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (event) {
    const value = event.target.value
    const name = event.target.name

    this.setState({
      [name]: value
    })
  }

  onSubmit (event) {
    event.preventDefault()
    axios.post(`${CLIENT_URL}companies`, {
      name: this.state.name,
      industry: this.state.industry,
      address: this.state.address,
      url: this.state.url,
      glassdoor_link: this.state.glassdoor_link,
      jobs: []
    })
      .then(res => {
        this.props.updatePage()
      })
      .catch(data => {
        console.log(data)
      })
    this.props.onRequestClose()
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

          <form className='newjobform' onSubmit={this.onSubmit}>
            <input placeholder='Company Name' onChange={this.onChange} value={this.state.name} type='text' name='name' />

            <input placeholder='Industry' onChange={this.onChange} value={this.state.industry} type='text' name='industry' />

            <input placeholder='Address' onChange={this.onChange} value={this.state.address} type='text' name='address' />

            <input placeholder='Url' onChange={this.onChange} value={this.state.url} type='text' name='url' />

            <input placeholder='Glassdoor Link' onChange={this.onChange} value={this.state.glassdoor_link} type='text' name='glassdoor_link' />

            <input className='newjobbutton' type='submit' value='submit' />
          </form>
        </div>
      </Modal>
    )
  }
}

export default NewCompany
