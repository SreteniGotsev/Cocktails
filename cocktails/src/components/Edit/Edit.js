import './Edit.css'
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as cocktailService from '../../services/cocktailsService'
import { AuthContext } from '../../contexts/AuthContext';
import { isAuth } from '../../hoc/isAuth';

const Edit = () =>{
  const{user} = useContext(AuthContext)  
  const [cocktail, setCocktail] = useState({})
  const {id} = useParams()
  const navigate = useNavigate();

  useEffect(()=>{
    
    let cocktailResult =cocktailService.getOne(id)
    .then(res=>{
      setCocktail(res)
      console.log(cocktailResult)})
      .catch(err=>{navigate('/error')})
  },[id])

  const editHandler = (e)=>{
    e.preventDefault();

      let formData = new FormData(e.currentTarget);
      
      let name = formData.get('cocktail')
      let category = formData.get('category')
      let recipe = formData.get('recipe')
      let image = formData.get('image')

      // console.log(name)
      // console.log(category)
      // console.log(recipe)
      // console.log(image)

      cocktailService.edit( cocktail._id,{
        name,
        category,
        recipe,
        image
      },user.accessToken)
      .then(()=>{navigate('/catalog')})
      .catch(err=>{navigate('/error')})
  }

    return (
      <div className="container-edit">
        <div className="container">
        <div className="form">
            <header>Edit</header>
            <form onSubmit={editHandler}>
              <input type="text" name="cocktail" defaultValue={cocktail.name} placeholder="Cocktail Name" />
              <select className="input" defaultValue={cocktail.category} name="category">
                <option value="stirred">Stirred</option>
                <option value="sour">Sour</option>
                <option value="fizz">Fizz</option>
                <option value="highball">Highball</option>
                <option value="shot">Shot</option>
                <option value="other">Other</option>
              </select>
              <textarea className="input" defaultValue={cocktail.recipe}  rows="10" cows="50" name="recipe"></textarea>
              <input name ="image" defaultValue={cocktail.image} type="text" placeholder="ImageURL" />
              <input type="submit" className="button" value="Create" />
            </form>
        </div>
        </div>
      </div>
    );
}


 
export default isAuth(Edit);