import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "paragraph active-link" : "paragraph"}
                        to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "paragraph active-link" : "paragraph"} to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "paragraph active-link" : "paragraph"} to="/reviews">Reviews</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "paragraph active-link" : "paragraph"} to="/pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "paragraph active-link" : "paragraph"} to='/about'>About</NavLink>
                </li>
                <li>
                    <a className="paragraph" target="_blank" href="https://kamaldeep.vercel.app/">Developer</a>
                </li>
            </ul>
            <p className="paragraph">Developed By Kamaldeep. <br />All rights reserved</p>
        </footer>
    )
}

export default Footer