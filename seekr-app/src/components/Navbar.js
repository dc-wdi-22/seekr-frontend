import React, {Component} from 'react'
import './Navbar.css'

class Navbar extends Component {

  addJob = () => {
    console.log('adding job')
  }
  render(){
    return(
      <div class="navbar">
        <h2 class="navbar-header">Seekr</h2>
        <button class="add-button" onClick={this.addJob}>+ Add Job</button>
        <span class="user">User: WDI22</span>
      </div>
    )
  }
}

export default Navbar