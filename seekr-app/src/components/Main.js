import React,{Component} from 'react'

import JobRows from './JobRows'

class Main extends Component {
  render(){
    return(
      <div>
        <h1>Main Component</h1> 
        <JobRows />
      </div>
    )
  }
}

export default Main