import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

const Header = () => {
    const [navOpen, setNavOpen] = useState(true);
    
  return (
    <header className='fixed top-0 left-0 z-40 flex items-center w-full h-20 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
        <div className="flex items-center justify-between w-full px-4 mx-auto max-w-screen-2xl md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
            {/* logo */}
            <h1>
                <a href="/" className='logo'>
                    <img src="/images/LogoWhiteGt.svg" alt="Cagita Dian" width={40} height={40}/>
                </a>
            </h1>

            {/* Menu */}
            <div className='relative md:justify-self-center'>
                <button className='menu-btn md:hidden' onClick={() => setNavOpen((prev) => !prev)}>
                    <span className='material-symbols-rounded'>{navOpen ? 'close' : 'menu'}</span>
                </button>

                <Navbar navOpen={navOpen}/>
            </div>

            {/* Contact */}
            <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">Contact Me</a>
        </div>
    </header>
  )
}

export default Header