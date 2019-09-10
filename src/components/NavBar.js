import React, { Component } from 'react';
import './NavBar.css'
import { Link } from 'gatsby';

class NavBar extends Component {
    render(){
        return(
            <div>
                <nav className="navbar">
                   <li><Link className="about" to="/"> Acerca de mí </Link></li>
                   <li><Link className="residencias" to="/residencias"> Residencias </Link></li>
                   <li><Link className="investigacion" to="/investigacion"> Investigación</Link></li> 
                   <li><Link className="tecnica" to="/tecnica"> Técnica </Link></li>
                   <li><Link className="tecnica" to="/workshops"> Charlas y Workshops </Link></li> 
                   <li><Link className="produccion" to="/produccion"> Producción </Link></li> 
                   <li><Link className="livecoding" to="/livecoding"> Live Coding </Link></li> 
                </nav>
            </div>
        );
    }
}

export default NavBar;

