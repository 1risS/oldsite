import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
// import P5Wrapper from 'react-p5-wrapper';
import logoSketch from './logoSketch'
import Sketch from './Sketch'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <Sketch sketch={logoSketch} />
        <NavBar />
        <Footer />
      </header>
    )
  }
}

export default Header
