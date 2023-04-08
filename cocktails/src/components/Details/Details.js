import { useContext, useEffect, useState } from 'react';
import './Details.css'
import { useNavigate, useParams } from 'react-router-dom';
import * as cocktailService from '../../services/cocktailsService'
import { AuthContext } from '../../contexts/AuthContext';

const Details = ()=>{
  const{user} = useContext(AuthContext)  
  const [cocktail, setCocktail] = useState({})
  const {id} = useParams()
  const navigate = useNavigate();

  

  useEffect(()=>{
    
    let cocktailResult =cocktailService.getOne(id)
    .then(res=>{
      setCocktail(res)
      console.log(cocktailResult)})
  },[id])
  
  console.log(`cocktailId = ${id}`)
  console.log(user)
  console.log(cocktail)

const deleteHandler = (e)=>{
   e.preventDefault()
   cocktailService.remove(id,user.accessToken);
   navigate("/catalog");
}

const editHandler = (e)=>{
   e.preventDefault()

}

const ownerButtons = (
  <>
    <button className="cart-btn" onClick={editHandler}>
       Edit
    </button>
    <button className="cart-btn" onClick={deleteHandler}>
     Delete
    </button>
  </>
);

const userButtons = (
  <button className="cart-btn">
     Like
  </button>
);
    return (
      <div className="container-details text-center">
        <div className="single-product-item">
          <div className="product-image">
            <a href="single-product.html">
              <img src={`${cocktail.image}`} alt="" />
            </a>
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