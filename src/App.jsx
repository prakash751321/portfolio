import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {

  return (
   <>
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </BrowserRouter>    
   </>
  )
}

export default App
