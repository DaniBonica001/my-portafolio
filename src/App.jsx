import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Portafolio from "./Components/Portafolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollUp from "./Components/ScrollUp";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills/>
      {/* <Services/>    */}
      <Portafolio/>
      <Contact/>
      <Footer/>
      <ScrollUp/>
         
    </>
  );
}

export default App;
