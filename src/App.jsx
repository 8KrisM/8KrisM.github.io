import './index.css'
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {


  return (
    <div className='lg:py-0 lg:flex'>
      <Welcome/>
      <div className='waves'></div>
      <div className='lg:relative lg:left-[30%] lg:w-[65%] space-y-8 mx-8'>
        <AboutMe/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
