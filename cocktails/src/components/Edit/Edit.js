import './Edit.css'
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as cocktailService from '../../services/cocktailsService'
import { AuthContext } from '../../contexts/AuthContext';
import { isAuth } from '../../hoc/isAuth';
import * as validate from '../../common/validate';
import * as err from '../../common/style';

const Edit = () =>{
  const{user} = useContext(AuthContext)  
  const [cocktail, setCocktail] = useState({})
  const {id} = useParams()
  const navigate = useNavigate();

  const [errObj,setErrObj] = useState({
    name:{err:false,message:''},
    recipe:{err:false,message:''},
  })

  useEffect(()=>{
    
    cocktailService.getOne(id)
    .then(res=>{
      setCocktail(res)
    })
      .catch(()=>{navigate('/error')})
  },[id,navigate])

  const editHandler = (e)=>{
    e.preventDefault();

      let formData = new FormData(e.currentTarget);
      
      let name = formData.get('name')
      let category = formData.get('category')
      let recipe = formData.get('recipe')
      let image = formData.get('image')

      console.log(user.accessToken)
      cocktailService.edit(id,{
        name,
        category,
        recipe,
        image
      },user.accessToken)
      .then(()=>{navigate('/catalog')})
      .catch(err=>{
        console.log(err);
        navigate('/error')})
  }

  
  const onChangeHandler =(e)=>{
    if(e){
     const ob = Object.assign({},validate.cocktail(e.target.name,e.target.value))
      setErrObj(ob)
   }
  }

    return (
      <div className="container-edit">
        <div className="container">
        <div className="form">
            <header>Edit</header>
            <form onSubmit={editHandler}>
              <input type="text" name="name" defaultValue={cocktail.name} placeholder="Cocktail Name"  onBlur={onChangeHandler}
                style={err.borderError(errObj.name.err)}
              />
              {
                <span style={err.displayError(errObj.name.err)}>
                  {errObj.name.message}
                </span>
              }
              <select className="input" defaultValue={cocktail.category} name="category">
                <option value="stirred">Stirred</option>
                <option value="shaken">Shaken</option>
                <option value="sour">Sour</option>
                <option value="fizz">Fizz</option>
                <option value="highball">Highball</option>
                <option value="shot">Shot</option>
                <option value="other">Other</option>
              </select>
              <textarea className="input" defaultValue={cocktail.recipe}  rows="10" cows="50" name="recipe"onBlur={onChangeHandler}
                style={err.borderError(errObj.recipe.err)}
              ></textarea>
              {
                <span style={err.displayError(errObj.recipe.err)}>
                  {errObj.recipe.message}
                </span>
              }
              <input name ="image" defaultValue={cocktail.image} type="text" placeholder="ImageURL" />
              <input type="submit" className="button" value="Edit" />
            </form>
        </div>
        </div>
      </div>
    );
}


 
export default isAuth(Edit);