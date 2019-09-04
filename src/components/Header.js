import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <P5Wrapper sketch={sketch} />
                <NavBar />
                <Footer />
            </header>
        )
    }
}

export default Header
