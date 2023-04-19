import { useContext, useEffect, useState } from 'react';
import './Details.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as cocktailService from '../../services/cocktailsService'
import * as likeService from '../../services/likeService'
import { AuthContext } from '../../contexts/AuthContext';
import { isAuth } from '../../hoc/isAuth';

const Details = ()=>{
  const{user} = useContext(AuthContext)  
  const [cocktail, setCocktail] = useState({})
  const [likes,setLikes] = useState(0)
  const {id} = useParams()
  const navigate = useNavigate();

  

  useEffect(()=>{
    likeService.getCount(id).then(res=>{
      setLikes(res)
    }).catch(()=>{navigate('/error')})

    cocktailService.getOne(id)
    .then(res=>{
      setCocktail(res)
  })
  .catch(()=>{navigate('/error')})
  },[id, navigate])
  

const deleteHandler = (e)=>{
   e.preventDefault()
   cocktailService.remove(id,user.accessToken);
   navigate("/catalog");
}

const likeHandler=(e)=>{
  e.preventDefault();

  if(user._id===cocktail._ownerId){
    return
  } 

  if(likes.includes(user._id)){

    window.alert('You cannot like more than once!')
    return
  }

  likeService.like(user,id)
  .then(()=>{
    
    setLikes(state=>[...state,user._id])
  })
  .catch(()=>{window.alert('You couldn\'t like it this time!')})
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
  <a className="cart-btn" onClick={likeHandler}>
     Like
  </a>
);
    return (
      <div className="container-details text-center">
        <div className="single-product-item">
          <div>
              <img src={`${cocktail.image}`} alt="" />
          </div>
          <h3>{cocktail.name}</h3>
          <p className="product-price">
            {cocktail.category}
          </p>
          <p className="description">
          {cocktail.recipe}
          </p>
          <p>Likes:{likes.length}</p>

          {user._id &&
             (user._id === cocktail._ownerId ? ownerButtons : userButtons)} 
          
        </div>
      </div>
    );
}

export default isAuth(Details);