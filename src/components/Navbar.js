import React from "react"
import { Link } from 'gatsby'

export default function Navbar() {

    return (
        /*
        <nav>
            <h1>coding w/ beto</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
        */
           <nav className="my-4 d-flex justify-content-between">
               <Link className="header-link-home" to="/">codingwbeto</Link>
               <div className="links">
                   <Link className="header-link-home" to="/">Home</Link>
                   <Link className="header-link-home" to="/about">About</Link>
                   <Link className="header-link-home" to="/geology">Geology</Link>
               </div>
           </nav>

        /* 
         * this is a working collapsible nav, will add this later
         *
        <div>
        
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="pb-4">
                    <span className="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>
            
            
            <nav className="navbar">
                <div className="container">
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                     </button>
                </div>
            </nav>

        </div>
        */
)
} 

