import './CatalogCard.css'

const CatalogCard = ()=>{
    return (
      <div className="col-lg-4 col-md-6 text-center">
        <div className="single-product-item">
          <div className="product-image">
            <a href="single-product.html">
              <img src="../../assets/img/products/product-img-1.jpg" alt="" />
            </a>
          </div>
          <h3>Stirred</h3>
          <p className="product-price">
              Old Fashioned{" "}
          </p>
          <a href="cart.html" className="cart-btn">
            <i className="fas fa-shopping-cart"></i> Details
          </a>
        </div>
      </div>
    );
}

export default CatalogCard;