import './Header.css'
import {Link } from 'react-router-dom'


const registerOptions = (
  <>
    <li>
      <Link to="/register">Register</Link>
    </li>
    <li>
      <Link to="/login">Log in</Link>
    </li>
  </>)

const logOutOptions = (
  <>
    <li>
      <Link to="/create">Create</Link>
    </li>
    <li>
      <Link to="contact.html">Log Out</Link>
    </li>
  </>
);


const Header = () => {
    return(
        <div className="top-header-area" id="sticker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="main-menu-wrap">
                <div className="site-logo">
                  
                  <Link to="/">
                    <img className="image-logo" src="../../assets/img/logo.jpg" alt="" />
                  </Link>
                </div>

                <nav className="main-menu">
                  <ul>
                    <li className="current-list-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/catalog">Catalog</Link>
                    </li>
                   { true?registerOptions:logOutOptions

                   }
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>);
};

export default Header;