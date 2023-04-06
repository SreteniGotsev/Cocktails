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
import { Route, Routes } from "react-router";


function App() {
  return (
    <div className="App">
      {/* <div className="loader">
        <div className="loader-inner">
          <div className="circle"></div>
        </div>
      </div> */}

      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/details" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/error" element={<Error />} />
      </Routes>

      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
