import { Link } from 'react-router-dom'

import '../style/Navbar.css'

function Navbar() {
  return (
    <nav>
        <div className="wrapper">
            <div className="logo"><Link to="/">Gunpla Grade Guide</Link></div>
            <div className="menu">
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/grade">Grade</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
