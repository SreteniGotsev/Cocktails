import './Hero.css'
const Hero = ()=>{
    return (
      <div className="hero-area hero-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 offset-lg-2 text-center">
              <div className="hero-text">
                <div className="hero-text-tablecell">
                  <p className="subtitle">Lift your spirits!</p>
                  <h1>Life is too short for a bad drink!</h1>
                  <div className="hero-btns">
                    <a href="shop.html" className="boxed-btn">
                      Cocktail list
                    </a>
                    <a href="contact.html" className="bordered-btn">
                      Blog
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero;