import { useState } from "react"
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false)
    const navToogle = () => {
        setMobileNav(!mobileNav)
    }

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <i className='bx bxs-navigation'></i> Growth
                </Link>
            </div>
            <nav>
                <ul className={`${mobileNav ? "active" : ''}`}>
                    <li>
                        <NavLink
                            onClick={navToogle}
                            className={({ isActive }) => isActive ? "active-link" : ""} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={navToogle}
                            className={({ isActive }) => isActive ? "active-link" : ""}
                            to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={navToogle}
                            className={({ isActive }) => isActive ? "active-link" : ""}
                            to="/reviews">Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={navToogle}
                            className={({ isActive }) => isActive ? "active-link" : ""}
                            to="/pricing">Pricing</NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={navToogle}
                            className={({ isActive }) => isActive ? "active-link" : ""}
                            to="/about">About</NavLink>
                    </li>
                </ul>
                <div className="navigation-logo" onClick={navToogle}>
                    {mobileNav ? <i className='bx bx-x'></i> : <i className='bx bx-menu-alt-right' ></i>}
                </div>
            </nav>

        </header>
    )
}

export default Navbar