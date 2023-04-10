import './About.css'
const About = ()=>{
    return (
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center">
                <div className="about-article">
                  <div className="about-article-pictur">
                    <img src="assets/img/explore.jpg" alt="" />
                  </div>
                  <div className="about-article-meta">
                    <h3>Experiment with new flavours</h3>
                    <p className="about-article-body">
                      "Have you ever been in a situation where you want to try
                      something that would take you to another level of
                      satisfaction? You don't know where to find it? Well, not any
                      longer!"
                    </p>
                  </div>
                </div>

                <div className="about-article">
                  <div className="about-article-picture">
                    <img src="assets/img/share.jpg" alt="" />
                  </div>
                  <div className="about-article-meta">
                    <h3>Share your passion</h3>
                    <p className="about-article-body">
                      "Whenever you have a new extraordinary idea, don't hesitate!
                                             Share it! "
                    </p>
                  </div>
                </div>
                <div className="about-article">
                  <div className="about-article-pictur">
                    <img src="assets/img/enjoy.jpg" alt="" />
                  </div>
                  <div className="about-article-meta">
                    <h3>Have it everywhere</h3>
                    <p className="about-article-body">
                      "Explore the new culture everywhere you go! 
                      Just one click"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default About;