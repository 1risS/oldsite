import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    {/* <a href="#" className="image avatar"><img src={avatar} alt="" /></a> */}
                    <h1><strong>irisS</strong></h1>
                </div>
                <NavBar />
                <Footer />
            </header>
        )
    }
}

export default Header
