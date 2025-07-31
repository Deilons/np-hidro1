import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Services from "./components/Services"
import Equipment from "./components/Equipment"
import Supplies from "./components/Supplies"
import CostSimulator from "./components/CostSimulator"
import Branches from "./components/Branches"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './index.css'
import './App.css'
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-industrial bg-cover bg-center bg-no-repeat">

      </div>
      <Navbar />
      <Hero />
      <Services />
      <Equipment />
      <Supplies />
      <CostSimulator />
      <Branches />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
