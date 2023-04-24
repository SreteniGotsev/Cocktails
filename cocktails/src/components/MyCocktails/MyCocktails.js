import { useContext, useEffect, useState } from 'react';
import { isAuth } from '../../hoc/isAuth';
import './MyCocktails.css'
import { useNavigate } from 'react-router-dom';
import CatalogCard from '../Catalog/CatalogCard/CatalogCard';
import * as cocktailService from '../../services/cocktailsService'
import { AuthContext } from '../../contexts/AuthContext';

const MyCocktails = ()=>{
    const [cocktail, setCocktails] = useState([]);
    const{user}= useContext(AuthContext)
   
    const navigate = useNavigate()

    useEffect(()=>{
    
       cocktailService.getMine(user._id)
       .then(result=> {
       setCocktails(result)
     })
     .catch(()=>{navigate('/error')})
     
    },[navigate,user._id])

   return(
     
       <div className="product-section mt-150 mb-150">
       <div className="container">
         
         <div className="row">
           <div className="col-lg-8 text-center">
             <div className="section-title">
               <h3>
                 <span className="orange-text">That's the</span> SPIRIT
               </h3>
               <p>
                 Find some of the best recipes in the world! Boost your imagination!
               </p>
             </div>
           </div>
         </div>

         <div className="row">
        {cocktail.length >0
        
         ? cocktail.map(x=><CatalogCard key={x._id} cocktail={x}/>)
         : <h3>No cocktails in the databse, yet! Feel free to create one!</h3>
        }
         </div>
       </div>
     </div>

   )
}

export default isAuth(MyCocktails);