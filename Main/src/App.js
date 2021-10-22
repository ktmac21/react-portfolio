import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Contact from './components/Contact';
import banner from './Images/erinArt.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 




function App() {
  
  return (
    <Router>
    <div className="App">
    
      
      <Navbar />
      <img className='banner' src={banner} alt='banner'/>
      
      <Switch>
        <Route exact path='/'>
          <About />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route exact path='/resume'>
          <Skills />
          <Resume />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Switch>
      
      <Footer />
    </div>

  </Router>
  );
}

export default App;
