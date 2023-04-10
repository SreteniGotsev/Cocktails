import { useContext } from 'react';
import './CatalogCard.css'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext';

const CatalogCard = (x)=>{
 const {user } = useContext(AuthContext)

    return (
      <div>
        <div className="single-product-item catalog-card">
          <div className="product-image">
            <img src={x.cocktail.image} alt="" />
          </div>
          <div className="product-info">
            <h3>{x.cocktail.category}</h3>
            <p className="product-price">{x.cocktail.name}</p>
            {user._id ? (
              <Link
                to={`/catalog/details/${x.cocktail._id}`}
                className="cart-btn"
              >
                Details
              </Link>
            ) : (
              "Login for details"
            )}
          </div>
        </div>
      </div>
    );
}

export default CatalogCard;