import React, {Component} from 'react'

class Navbar extends Component {

  addJob = () => {
    console.log('adding job')
  }
  render(){
    return(
      <div>
        <h2>Seekr</h2>
        <a href="/login">Login</a>
        <button onClick={this.addJob}>Add Job</button>
      </div>
    )
  }
}

export default Navbar