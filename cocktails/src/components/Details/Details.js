import { useContext, useEffect, useState } from 'react';
import './Details.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as cocktailService from '../../services/cocktailsService'
import { AuthContext } from '../../contexts/AuthContext';

const Details = ()=>{
  const{user} = useContext(AuthContext)  
  const [cocktail, setCocktail] = useState({})
  const {id} = useParams()
  const navigate = useNavigate();

  

  useEffect(()=>{
    
    cocktailService.getOne(id)
    .then(res=>{
      setCocktail(res)
  })
  },[id])
  

const deleteHandler = (e)=>{
   e.preventDefault()
   cocktailService.remove(id,user.accessToken);
   navigate("/catalog");
}



const ownerButtons = (
  <>
  
    <Link to={`/edit/${cocktail._id}`}  key={cocktail._id} cocktail={cocktail} className="cart-btn">Edit</Link>
    <a className="cart-btn" onClick={deleteHandler}>
     Delete
    </a>
  </>
);

const userButtons = (
  <a className="cart-btn">
     Like
  </a>
);
    return (
      <div className="container-details text-center">
        <div className="single-product-item">
          <div className="product-image">
              <img src={`${cocktail.image}`} alt="" />
          </div>
          <h3>{cocktail.name}</h3>
          <p className="product-price">
            {cocktail.category}
          </p>
          <p className="description">
          {cocktail.recipe}
          </p>
          <p>Likes:{cocktail.likes?.length}</p>

          {user._id &&
             (user._id === cocktail._ownerId ? ownerButtons : userButtons)} 
          
        </div>
      </div>
    );
}

export default Details;