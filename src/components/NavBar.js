import React, { Component } from 'react';
import './NavBar.css'
import { Link } from 'gatsby';

class NavBar extends Component {
    render(){
        return(
            <div>
                <nav className="navbar">
                   <li><Link className="about" href="/about"> Acerca de mí </Link></li>
                   <li><Link className="residencias" href="/residencias"> Residencias </Link></li>
                   <li><Link className="investigacion" href="/investigacion"> Investigación</Link></li> 
                   <li><Link className="tecnica" href="/trabajo-tecnico"> Técnica </Link></li> 
                   <li><Link className="produccion" href="/produccion"> Producción </Link></li> 
                   <li><Link className="livecoding" href="/livecoding"> Live Coding </Link></li> 
                </nav>
            </div>
        );
    }
}

export default NavBar;

