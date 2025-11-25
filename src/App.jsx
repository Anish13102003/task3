import Navbar from "./Components/Navbar";
import Home from  "./Components/Home"
import About from "./Components/About";
import Footer from "./Components/Footer";
import Characters from "./Components/Characters";
import { Routes,Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
    <Navbar/>
    
      <Routes>
<Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Characters' element={<Characters />} />
        </Routes>
        <Footer/>

    </>
  );
};

export default App;
