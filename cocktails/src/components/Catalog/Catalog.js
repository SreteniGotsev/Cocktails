
import './Catalog.css'
import CatalogCard from './CatalogCard/CatalogCard';

const Catalog = ()=>{
    return(
      
        <div className="product-section mt-150 mb-150">
        <div className="container">
          
          <div className="row">
            <div className="col-lg-8 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Our</span> Products
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, fuga quas itaque eveniet beatae optio.
                </p>
              </div>
            </div>
          </div>

          <div className="row">

          <CatalogCard/>

          </div>
        </div>
      </div>

    )
}

export default Catalog;