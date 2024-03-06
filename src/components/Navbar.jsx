
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'><h1>Home</h1></NavLink>
                    </li>
                    <li>
                        <NavLink to='/editForm'><h1>Edit-Form</h1></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
