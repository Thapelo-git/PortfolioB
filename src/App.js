
import './App.css';
import Header from './components/Header';
import NavicationBar from './components/NavicationBar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
    <NavicationBar/>
    <Header/>
    <About/>
    <Projects/>
    <Contact/>
    </div>
  );
}

export default App;
