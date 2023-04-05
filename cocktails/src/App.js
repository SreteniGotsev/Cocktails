import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Sponsors from "./components/Sponsors/Sponsors";
import Error from "./components/Error/Error";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import CopyRight from "./components/CopyRight/CopyRight";


function App() {
  return (
    <div className="App">
      {/* <div className="loader">
        <div className="loader-inner">
          <div className="circle"></div>
        </div>
      </div> */}

      <Header/>

      <Hero/>

      <Login/>

      <Register/> 
      
      <Create/>

      <Edit/>

      <Catalog/>

      <Details/>

      <About/>

      <Sponsors/>

      <Error/>

      <Footer/>

      <CopyRight/> 

    </div>

  );
}

export default App;
