import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Screenshots from "./Pages/Screenshots";
import Blog from "./Pages/Blog";
import Dawnload from "./Pages/Dawnload";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
   <div className="bg-light">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/features" element={<Features/>}/>
      <Route path="/screenshot" element={<Screenshots/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/dawnload" element={<Dawnload/>}/>
    </Routes>
  
   </div>
  );
}

export default App;
