
import { useEffect, useState } from 'react';
import './Catalog.css'
import CatalogCard from './CatalogCard/CatalogCard';
import * as cocktailService from '../../services/cocktailsService'


const Catalog = ()=>{
  const [cocktail, setCocktails] = useState([]);
     //const [loading, setLoading] = useState(false);

     useEffect(()=>{
        //setLoading(true);

        cocktailService.getAll()
        .then(result=> {
        setCocktails(result);
        // setLoading(false);
        })
      
     },[])

    return(
      
        <div className="product-section mt-150 mb-150">
        <div className="container">
          
          <div className="row">
            <div className="col-lg-8 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Our</span> Products
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, fuga quas itaque eveniet beatae optio.
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

export default Catalog;