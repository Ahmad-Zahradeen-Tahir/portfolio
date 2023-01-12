import { useState } from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'
import Portfolio from './Components/Portfolio/Portfolio'
import './index.css'

const App = () => {
  const [activeNav, setActiveNav] = useState('#')
  return <div >
    <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
    <Header setActiveNav={setActiveNav} />
    <About/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Footer setActiveNav={setActiveNav} />
  </div>;
};

export default App;
