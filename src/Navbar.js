import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <NavLink to='/jerky'>Jerky</NavLink>
            <NavLink to='/twizzlers'>Twizzlers</NavLink>
            <NavLink to='/cheetos'>Cheetos</NavLink>
        </nav>
    )
}

export default Navbar;