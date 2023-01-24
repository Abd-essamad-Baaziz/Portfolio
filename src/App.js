import './App.css';
import './components/home/home.css'
import Header from './components/header/Header'
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
// import Animation from './components/animations/Animations';

function App() {
  return (
    <>
      {/* <Animation /> */}
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
      </main>
      
    </>
  );
}

export default App;
