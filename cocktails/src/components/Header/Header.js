import './Header.css'

const Header = () => {
    return(
        <div className="top-header-area" id="sticker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="main-menu-wrap">
                <div className="site-logo">
                  <a href="index.html">
                    <img className="image-logo" src="../../assets/img/logo.jpg" alt="" />
                  </a>
                </div>

                <nav className="main-menu">
                  <ul>
                    <li className="current-list-item">
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="news.html">Blog</a>
                    </li>
                    <li>
                      <a href="contact.html">Catalog</a>
                    </li>
                    <li>
                      <a href="contact.html">Register</a>
                    </li>
                    <li>
                      <a href="shop.html">Sign in</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>);
};

export default Header;