import './Details.css'

const Details = ()=>{
    return (
      <div className="container-details text-center">
          <div className="single-product-item">
            <div className="product-image">
              <a href="single-product.html">
                <img src="../../assets/img/products/product-img-1.jpg" alt="" />
              </a>
            </div>
            <h3>Strawberry</h3>
            <p className="product-price">
              <span>author</span> Category{" "}
            </p>
            <p>Recipe:.....</p>
            <p>Likes:</p>
            <a href="cart.html" className="cart-btn">
              <i className="fas fa-shopping-cart"></i> Like
            </a>
          </div>
        </div>
    );
}

export default Details;