import React, { Component } from 'react'

import JobRows from './components/JobRows'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Notes from './components/Notes'
import Sidebar from './components/Sidebar'
import SingleJob from './components/SingleJob'
import ModalConductor from './components/ModalConductor'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Main />
        <Sidebar />
        <ModalConductor />
      </div>
    )
  }
}

export default App
