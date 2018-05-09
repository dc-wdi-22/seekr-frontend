import React, {Component} from 'react'
import './Navbar.css'
import seekrLogo from '../Images/seekrLogo.svg'

class Navbar extends Component {

  addJob = () => {
    console.log('adding job')
  }
  render(){
    return(
      <div class="navbar">
        <img className='logo' src={seekrLogo} alt='seekr'/>
        <button class="add-button" onClick={this.addJob}>+ Add Job</button>
        <span class="user">User: WDI22</span>
      </div>
    )
  }
}

export default Navbar