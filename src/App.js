import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Header from './Components/Header';
import Project from './Components/Skills';


function App() {
  return (
    <div className="App">
        <Header/>
        <Hero />
        <About/>
        <Project/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;

