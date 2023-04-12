import react from "react";
import { NavLink } from "react-router-dom"
import './navbar.css'

function NavBar() {
    return (
       <>
        <header className="navbar">
            <div className="site-logo">
                <p>Lifting Vault</p>
            </div>

            <nav>
                <ul className="navbar--elements">
                    <NavLink style={{textDecoration: 'none', color: 'white'}} to="/">
                        <li>HOME</li>
                    </NavLink>
                    <NavLink style={{textDecoration: 'none', color: 'white'}} to="/Vault">
                        <li>VAULT</li>
                    </NavLink>
                    <NavLink style={{textDecoration: 'none', color: 'white'}} to="/About">
                        <li>ABOUT</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
       </>
    )
}

export default NavBar;