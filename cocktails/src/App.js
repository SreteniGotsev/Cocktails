import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Sponsors from "./components/Sponsors/Sponsors";
import Error from "./components/Error/Error";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import CopyRight from "./components/CopyRight/CopyRight";
import { Route, Routes } from "react-router";
import {AuthContext} from './contexts/AuthContext'
import {useState } from "react";


function App() {
  const [user, setUser] = useState({
    _id: '',
    email: '',
    accessToken:''
  }  )

  const login = (authData) =>{
    setUser(authData);
  }

  const logout = () =>{
    setUser({
      _id: '',
      email: '',
      accessToken:''
    } );
  }

  return (
    <AuthContext.Provider value={{user,login,logout}}>
      <div className="App">
        {/* <div className="loader">
        <div className="loader-inner">
        <div className="circle"></div>
        </div>
      </div> */}

        <Header />
        <Routes>
          <Route path="/*" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/catalog/" element={<Catalog />} />
          <Route path="/catalog/details/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/error" element={<Error />} />
        </Routes>

        <Footer />
        <CopyRight />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
