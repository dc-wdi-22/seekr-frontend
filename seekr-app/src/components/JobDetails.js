import React, {Component} from 'react'
import Modal from 'react-modal'
import '../Modal.css'
import ToDo from './ToDos'

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
        // style={customStyles}
        contentLabel='Example Modal'>
        <div>
          <header className='header'>
            <h1 className='header-text'>{this.props.job.company.name}</h1>
            <h2 className='header-text'>Job title: {this.props.job.title}</h2>
            <button className='button'>Edit</button>
          </header>
          <div className='modalgrid-container'>
            <div>
              <h3><span className='bold'>Date posted:</span> {this.props.job.date_posted}</h3>
              <h3><span className='bold'>Job description:</span> {this.props.job.description}</h3>
              <h3><span className='bold'>Salary:</span> {this.props.job.salary_range_start}—{this.props.job.salary_range_end}</h3>
              <h3><span className='bold'>Source:</span> {this.props.job.source}</h3>
              <h3><span className='bold'>Job requirements:</span> {this.props.job.requirements}</h3>
              <h3><span className='bold'>Notes:</span> {this.props.job.notes}</h3>
              <h3><span className='bold'>PK:</span> {this.props.job.pk}</h3>
            </div>
            <div className='todo'>
              <h2>To Do List</h2>
              <h3>{this.props.job.todos.map(item => <ToDo item={item} />)}</h3>
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}

export default JobDetails
