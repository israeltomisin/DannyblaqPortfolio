import Navbar from './Component/Navbar'
import './App.css'
import About from './Pages/About'
import Contact from './Pages/contact'
import Dashboard from './Pages/dashboard'
import Hero from './Pages/hero'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Dashboard />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <p>© {new Date().getFullYear()} Daniel Oluwasegun. Built with care.</p>
          <a className="footer-top" href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
