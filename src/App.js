
import './App.css';
import About from './components/About';
import Articles from './components/Articles';

import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
function App() {
  const scrollToCenter = () => {
    const elements = document.getElementsByClassName('imp');
    if (elements.length > 0) {
      elements[0].scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="App">
   <BrowserRouter>
             <div className="header">
             <img src="/photos/athi-consultancy-service-high-resolution-logo (1).jpg" alt="logo" className="logo1" />
             <ul className="nav-menu">
            <li>
            <Link to="/" className="imp" onClick={scrollToCenter}>Home</Link>
            </li>
            <li>
            <Link to="/about" className="imp">About</Link>
            </li>
            <li>
            <Link to="/services"  className="imp">Services</Link>
            </li>
            <li>
            <Link to="/contact" className="imp">Contact</Link>
            </li>
           
            <li>
            <Link to="/articles" className="imp">Careers</Link>
            </li>
            </ul>
            </div>
       
     
    <Routes>
     
      <Route exact path='/' element={<Home />}/>
     <Route exact path='/about' element={<About />}/> 
      <Route exact path='/services' element={<Services/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
 
      <Route exact path='/articles' element={<Articles />}/>
      
      

    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
