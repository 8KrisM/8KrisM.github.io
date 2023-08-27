import React, { useContext } from 'react'

const Navbar = () => {

  return (
    <div className='flex justify-center w-full gap-10 fixed lg:static bottom-0 py-3 px-5 z-10 glassmorphism'>
        <a className='navbar-button' href='#about'>ABOUT</a>
        <a className='navbar-button' href='#projects'>PROJECTS</a>
        <a className='navbar-button' href='#contact'>CONTACT</a>
    </div>
  )
}

export default Navbar