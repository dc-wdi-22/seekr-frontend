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
        style={customStyles}
        contentLabel='Example Modal'>
        <div className='jobDetail'>
          <header className='header'>
            <h1 className='header-text'>{this.props.example[0].company.name}</h1>
            <h2 className='header-text'>Job title: {this.props.example[0].title}</h2>
            <button className='button'>Edit</button>
          </header>
          <h3><span className='bold'>Date posted:</span> {this.props.example[0].date_posted}</h3>
          <h3><span className='bold'>Job description:</span> {this.props.example[0].description}</h3>
          <h3><span className='bold'>Salary:</span> {this.props.example[0].salary_range_start}—{this.props.example[0].salary_range_end}</h3>
          <h3><span className='bold'>Source:</span> {this.props.example[0].source}</h3>
          <h3><span className='bold'>Job requirements:</span> {this.props.example[0].requirements}</h3>
          <h3><span className='bold'>Notes:</span> {this.props.example[0].notes}</h3>
          <h2>To Do List</h2>
          <h3>{this.props.example[0].todo_list.map(item => <ToDo item={item} />)}</h3>
        </div>
      </Modal>
    )
  }
}

export default JobDetails
