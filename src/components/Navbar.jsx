import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = React.useState(false)
  function handleClick(){
    setOpen(!open)
  }
  return (
    <header className="header main-grid">
            <div className="header-content">
                <Link className="logo-link" to="/" >
                    <img src="../logo.png" alt="" className="logo" />
                </Link>
                <button aria-label="Open navigation" className="open-nav" onClick={()=>handleClick()}>&#9776;</button>

                <nav className={`nav ${open ? "navigation-open": ""}`}> 
                    <button aria-label="Close navigation" className="close-nav" onClick={()=>handleClick()}>&times;</button>
                    <ul className="nav-list">
                        <li className="nav-item" ><Link to="/" className="nav-link">home</Link></li>
                        <li className="nav-item" ><Link to="/about" className="nav-link ">about us</Link></li>
                        <li className="nav-item" ><Link to="/contact" className="nav-link">contact</Link></li>
                    </ul>
                </nav>
                
                
            </div>
    </header>
  )
}

export default Navbar