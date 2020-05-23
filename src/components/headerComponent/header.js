import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
               <div className="logo">
                   <svg width="12cm" height="4cm" viewBox="0 0 1200 400"
                        xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <desc>Example rect02 - rounded rectangles</desc>
                        
                        <rect x="110" y="150" width="200" height="100" rx="50"
                        fill="none" stroke="#00ff00" stroke-width="30"/>

                        <rect x="250" y="150" width="200" height="100" rx="50"
                        fill="none" stroke="#00ff00" stroke-width="30"/>

                        <g transform="translate(700 210) rotate(-90)">
                            <rect x="-90" y="-460" width="200" height="75" rx="50"
                            fill="none" stroke="#00ff00" stroke-width="30" />
                        </g>
                    </svg>
               </div>
               <h1 style={{color:"white", paddingLeft:200, paddingTop:20}}><b><i>eTe</i></b>Optimiza Technologies</h1>
               <nav>
                   <ul>
                       <li className="first">
                           <Link to='/'>Home</Link>
                       </li>
                       <li>
                           <Link to='/Products'><span>Products</span></Link>
                       </li>
                       <li className="last">
                           <Link to='/AboutUs'>About Us</Link>
                       </li>
                   </ul>
               </nav>
            </header>
         );
    }
}
 
export default Header ;