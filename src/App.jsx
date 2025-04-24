import Navbar from './pages/Navbar'
import './App.css'
import Hero from './pages/Hero'
import About from './pages/About'
import Sklassics from './pages/Sklassics'
import Quote from './pages/Quote'
import Faces from './pages/Faces'
import Desina from './pages/Desina'
import SomeToSome from './pages/SomeToSome'
import Footer from './pages/Footer'



function App() {

  return (
    <>
    <div className="App">
      <Navbar />
      <Hero/>
      <About />
      <Sklassics />
      <Quote />
      <Faces/>
      <Desina />
     <SomeToSome />
    <Footer />
     
    </div>
    </>
  )
}

export default App
