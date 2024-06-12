
import './App.css';
import Header from './components/Header';
import NavicationBar from './components/NavicationBar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
function App() {
  return (
    <div className="App">
    <NavicationBar/>
    <Header/>
    <About/>
    <Projects/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
