import './Edit.css'

const Edit = () =>{
    return (
      <div className="container-edit">
        <div className="container">
        <div className="form">
            <header>Edit</header>
            <form>
              <input type="text" name="cocktail" placeholder="Cocktail Name" />
              <select className="input" name="category">
                <option value="stirred">Stirred</option>
                <option value="sour">Sour</option>
                <option value="fizz">Fizz</option>
                <option value="highball">Highball</option>
                <option value="shot">Shot</option>
                <option value="other">Other</option>
              </select>
              <textarea className="input"   rows="10" cows="50" name="recipe"></textarea>
              <input name ="image" type="text" placeholder="ImageURL" />
              <input type="button" className="button" value="Create" />
            </form>
        </div>
        </div>
      </div>
    );
}


 
export default Edit;