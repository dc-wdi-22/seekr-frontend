import React, {Component} from 'react'
import Modal from 'react-modal'
import '../Modal.css'
import ToDo from './ToDo'
import NewToDo from './NewToDo'

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)'
//   }
// }

class JobDetails extends Component {
  render () {
    console.log('job details rendering', this.props)
    let todos = []
    this.props.job.todos.forEach(pk => {
      let todoMatch = this.props.todos.filter(todo => todo.pk === pk)
      todos.push(...todoMatch)
    })
    return (
      <Modal
        todos={this.props.todos}
        job={this.props.job}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        // style={customStyles}
        contentLabel='Example Modal'>
        <div>
          <header className='header'>
            <h1 className='header-text'>{this.props.job.company.name}</h1>
            <h2 className='header-text'>Job Title: {this.props.job.title}</h2>
            <button onClick={this.props.openNewJob} className='button'>Edit</button>
          </header>
          <div className='modalgrid-container'>
            <div>
              <p className='jobDetails'><span className='bold'>Date posted: </span>   {this.props.job.date_posted}</p>
              <p className='jobDetails'><span className='bold'>Job description: </span> {this.props.job.description}</p>
              <p className='jobDetails'><span className='bold'>Salary: </span> {this.props.job.salary_range_start}—{this.props.job.salary_range_end}</p>
              <p className='jobDetails'><span className='bold'>Source:</span> {this.props.job.source}</p>
              <p className='jobDetails'><span className='bold'>Job requirements:</span> {this.props.job.requirements}</p>
              <p className='jobDetails'><span className='bold'>Notes:</span> {this.props.job.notes}</p>
              <p className='jobDetails'><span className='bold'>PK:</span> {this.props.job.pk}</p>
            </div>
            <div className='todo'>
              <h2>To Do List</h2>
              <h3>{todos.map(todo => <ToDo item={todo} />)}</h3>
              <NewToDo job={this.props.job} updatePage={this.props.updatePage} />
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}

export default JobDetails
