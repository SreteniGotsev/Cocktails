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
          <p className="description">
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <p>Likes:</p>
          <button className="cart-btn">
            <i className="fas fa-shopping-cart"></i> Like
          </button>
        </div>
      </div>
    );
}

export default Details;