import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import gitlogo from './components/images/github.png'
import { Route, Routes, NavLink} from 'react-router-dom'


function App() {
 return (
    <>
      <nav className="navbar navbar-section navbar-expand-sm container-fluid bg-dark navbar-dark fixed-top">
        <div className='nav-start'>
          <h1>RITA</h1>
        </div>

        <div className='nav-end'>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav nav-list">
              <li><NavLink to='/' className='text-decoration-none text'>HOME</NavLink></li>
              <li><NavLink to='/about' className='text-decoration-none text'>ABOUT</NavLink></li>
              <li><NavLink to='/project' className='text-decoration-none text'>PROJECTS</NavLink></li>
              <li><NavLink to='/contact' className='text-decoration-none text'>CONTACT</NavLink></li>
              <li><a href='https://github.com/RITAADEDOLAPO' target='_blank'><img src={gitlogo} alt='github logo' className='github-logo'></img></a></li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
       
      <Footer />
    </>
  )
}

export default App
