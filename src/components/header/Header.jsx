import Logo from "./Logo"
import { Navbar } from "./NavBar"
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <Logo />
          <Navbar />
        </div>
      </div>
    </header>
  )

}

export default Header
