import React, {Component} from 'react'

import JobRows from './JobRows'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

class Main extends Component {
  render () {
    return (
      <div>
        <h1>Main Component</h1>
        <Navbar />
        <Sidebar />
        <JobRows />
      </div>
    )
  }
}

export default Main
