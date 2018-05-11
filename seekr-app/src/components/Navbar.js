import React, {Component} from 'react'
import './Navbar.css'
import seekrLogo from '../Images/seekrLogo.svg'

class Navbar extends Component {
  render () {
    return (
      <div className='navbar'>
        <img className='logo' src={seekrLogo} alt='seekr' />
        <button className='add-button' onClick={this.props.openNewJob}>+ Add Job</button>
        <button className='add-button' onClick={this.props.openNewCompany}>+ Add Company</button>
        <span className='user'>User: WDI22</span>
      </div>
    )
  }
}

export default Navbar
