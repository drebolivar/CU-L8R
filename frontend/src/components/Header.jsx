import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        </div>
    </header>
  )
}

export default Header
