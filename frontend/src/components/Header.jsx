import { Link } from 'react-router-dom'
import CUL8R from '../assets/CUL8Rlogo.png'

const Header = () => {
  return (
    <header>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/"> Moods </Link>
        {/* <Link to="/"> Just Pick For Me! </Link> */}
      </div>
      <img className="title" src={CUL8R} alt="logo" />
    </header>
  )
}

export default Header
