import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
    render(){
        return(
            <div>
                <nav className="navbar">
                   <li><a className="about" href="/about"> Acerca de mí </a></li>
                   <li><a className="residencias" href="/residencias"> Residencias </a></li>
                   <li><a className="investigacion" href="/investigacion"> Investigación</a></li> 
                   <li><a className="tecnica" href="/trabajo-tecnico"> Técnica </a></li> 
                   <li><a className="produccion" href="/produccion"> Producción </a></li> 
                   <li><a className="livecoding" href="/livecoding"> Live Coding </a></li> 
                </nav>
            </div>
        );
    }
}

export default NavBar;

