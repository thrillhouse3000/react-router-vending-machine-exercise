import { NavLink } from "react-router-dom";
import './VendingMachine.css'

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <img src="https://images.unsplash.com/photo-1575224526797-5730d09d781d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="vending machine"/>
            <div>
                <p>Allow me to vend for you.</p>
                <nav>
                    <NavLink to='/jerky'>Jerky</NavLink>
                    <NavLink to='/twizzlers'>Twizzlers</NavLink>
                    <NavLink to='/cheetos'>Cheetos</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default VendingMachine;