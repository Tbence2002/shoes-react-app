import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Shoes from './components/Shoes';

function App() {
  return (
    <section className="home-container">
      <Header/>
      <Hero/>
      <Shoes/>
      <About/>
    </section>
  );
}

export default App;
