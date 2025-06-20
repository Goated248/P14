
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.css'
const Header = () => {
  return (
    <header >
      <div >
        <img src={logo} alt="HRnet Logo"/>
      </div>
      <nav>
        <ul className='nav-items'>
          <li>
            <Link to="/create-employee">Create Employee</Link>
          </li>
          <li>
            <Link to="/employee-list">Employee List</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
