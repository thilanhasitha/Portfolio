import "./App.css";
import { BrowserRouter , Routes, Route  } from "react-router-dom";
import HeroSection from "./HeroSection";
import About from "./About";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";

function App() {
  return (
    
      <div className="App">

        <Navbar/>
        <HeroSection/>
        <About/>
        <Skills/>
        <Services/>
        <Projects/>

        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path ="/projects"element={<Projects/>}></Route>
            

            </Routes>  
          
        </BrowserRouter> */}

        <BrowserRouter>
        <Routes>
          <Route path ="/" element = {<App/>}></Route>
          <Route path='/skills'element={<Skills/>}></Route>
          <Route path = '/services' element={<Services/>}></Route>
          <Route path = '/about'element={<About/>}></Route>
          <Route path = '/projects'element={<Projects/>}></Route>
        </Routes>
        
        </BrowserRouter>

        
      </div>
    
  );
}

export default App;
