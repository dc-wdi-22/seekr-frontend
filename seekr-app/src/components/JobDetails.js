import React, {Component} from 'react'
import Modal from 'react-modal'
import '../Modal.css'

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

class JobDetails extends Component {
  render () {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        style={customStyles}
        contentLabel='Example Modal'>
        <div className=''>
          <h1>{this.props.example[0].company.name}</h1>
          <h2>Job title: {this.props.example[0].title}</h2>
          <h3>Date posted: {this.props.example[0].date_posted}</h3>
          <h3>Job desciption: {this.props.example[0].description}</h3>
          <h3>Job requirements: {this.props.example[0].requirements}</h3>
          <h3>Salary: {this.props.example[0].salary_range_start}—{this.props.example[0].salary_range_end}</h3>
          <h3>Source: {this.props.example[0].source}</h3>
          <h2>To Do List</h2>
          <h3>{this.props.example[0].todo_list.map(item => item.name)}</h3>
        </div>
      </Modal>
    )
  }
}

export default JobDetails
