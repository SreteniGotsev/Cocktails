import './Error.css'
const Error = () =>{
    return (
      <div>
        <div className="breadcrumb-section breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-1 text-center">
                <div className="breadcrumb-text">
                  <p>Never drink and drive!</p>
                  <h1>Something went wrong!</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="full-height-section error-section">
          <div className="full-height-tablecell">
            <div className="container">
              <div className="row">
                <div className="col-lg-8  text-center">
                  <div className="error-text">
                    <i className="far fa-sad-cry"></i>
                    <h1>Oops! Not Found.</h1>
                    <p>The page you requested for is not found.</p>
                    <a href="/" className="boxed-btn">
                      Back to Home
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

export default Error;
		