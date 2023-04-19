import { useContext,useState } from 'react';
import './Create.css'
import * as cocktailService from '../../services/cocktailsService'
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { isAuth } from '../../hoc/isAuth';
import * as validate from '../../common/validate';
import * as err from '../../common/style'

const Create = () =>{
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const [errObj,setErrObj] = useState({
    name:{err:false,message:''},
    recipe:{err:false,message:''},
  })

   const onCockteilCreate=(e)=>{
      e.preventDefault();
      console.log('clicked')
      let formData = new FormData(e.currentTarget);
      
      let name = formData.get('name')
      let category = formData.get('category')
      let recipe = formData.get('recipe')
      let image = formData.get('image')

      if(errObj.name.err||errObj.recipe.err){
        return
      }

      cocktailService.create({
        name,
        category,
        recipe,
        image
      },user.accessToken)
      .then(()=>{navigate('/catalog')})
      .catch(err=>{navigate('/error')})

    }
      const onChangeHandler =(e)=>{
        if(e){
         const ob = Object.assign({},validate.cocktail(e.target.name,e.target.value))
          setErrObj(ob)
       }
      }

    return (
      <div className="container-create">
        <div className="container">
          <div className="form">
            <header>Create</header>
            <form onSubmit={onCockteilCreate}>
              <input
                type="text"
                name="name"
                placeholder="Cocktail Name"
                onBlur={onChangeHandler}
                style={err.borderError(errObj.name.err)}
              />
              {
                <span style={err.displayError(errObj.name.err)}>
                  {errObj.name.message}
                </span>
              }
              <select className="input" name="category">
                <option value="stirred">Stirred</option>
                <option value="shaken">Shaken</option>
                <option value="sour">Sour</option>
                <option value="fizz">Fizz</option>
                <option value="highball">Highball</option>
                <option value="shot">Shot</option>
                <option value="other">Other</option>
              </select>
              <textarea
                className="input"
                rows="10"
                cows="50"
                name="recipe"
                onBlur={onChangeHandler}
                style={err.borderError(errObj.recipe.err)}
              ></textarea>
              {
                <span style={err.displayError(errObj.recipe.err)}>
                  {errObj.recipe.message}
                </span>
              }
              <input name="image" type="text" placeholder="ImageURL" />
              <input type="submit" className="button" value="Create" />
            </form>
          </div>
        </div>
      </div>
    );
}


 
export default isAuth(Create);