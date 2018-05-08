import React,{Component} from 'react'

import JobRows from './JobRows'
import Navbar from './Navbar'

class Main extends Component {
  render(){
    return(
      <div>
        <h1>Main Component</h1>
        <Navbar />
        <JobRows />
      </div>
    )
  }
}

export default Main