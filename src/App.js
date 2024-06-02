
import './App.css';
import Header from './components/Header';
import NavicationBar from './components/NavicationBar';
import About from './components/About';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
    <NavicationBar/>
    <Header/>
    <About/>
    <Projects/>
    </div>
  );
}

export default App;
