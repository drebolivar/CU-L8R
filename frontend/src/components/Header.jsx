import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/"> Moods </Link>
        <Link to="/"> Just Pick For Me! </Link>
      </div>
      <div className="title"> CU-L8R </div>
    </header>
  )
}

export default Header
