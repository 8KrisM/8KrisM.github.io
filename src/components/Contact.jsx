import React, { useContext } from 'react'


const Contact = () => {
  return (
    <div className='min-h-screen animate-opacity flex flex-col justify-center' id="contact">
        <h3 className="text-4xl font-bold md:text-7xl mb-10">Contact</h3>
            <div className='p-8'>
                <p className='text-xl md:text-3xl font-bold'>Kristián Michalik</p>
                <p className='mb-3'>8KrisM</p>
                <div className='flex gap-2 items-center mb-3'>
                    <img src='/facebook.svg' alt='facebook' className='h-6'/>
                    <a className='hover:scale-105 transition-all' href='https://www.facebook.com/Kristian.Michalik8'>Facebook</a>
                </div>
                <div className='flex gap-2 items-center mb-7'>
                    <img src='/at.svg' alt='email' className='h-6'/>
                    michalikkristian8@gmail.com
                </div>
                <a className='glassmorphism main-button' href="/resume_eng.pdf" download="resume_michalik">Download resume</a>
            </div>
    </div>
  )
}

export default Contact