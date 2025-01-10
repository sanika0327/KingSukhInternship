'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

// eslint-disable-next-line react/prop-types
const NavLink = ({ href, children }) => {
    return (
        <a href={href} className="group relative">
            {children}
            <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>
    )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="relative">
      <div className="sticky top-0 z-10 bg-white text-black w-full flex justify-between items-center py-6 px-4 md:px-20">
        <a href="#" className="text-[23px] font-semibold">
          KingSukh
        </a>
        <div className="hidden md:flex justify-center items-center gap-12 font-semibold">
          <NavLink href="#about">ABOUT</NavLink>
          <NavLink href="#services">SERVICES</NavLink>
          <NavLink href="#rooms">ROOMS</NavLink>
          <NavLink href="#gallery">GALLERY</NavLink>
          <NavLink href="#contact">CONTACT</NavLink>
        </div>
        <div className="hidden md:block">
          <a href="https://api.whatsapp.com/send?phone=919007062180">
            <button className="bg-black text-white px-5 py-2 rounded-lg font-bold hover:bg-gray-700">
              BOOK NOW
            </button>
          </a>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white z-20 py-4 px-4 shadow-md">
          <div className="flex flex-col gap-4 font-semibold">
            <NavLink href="#about">ABOUT</NavLink>
            <NavLink href="#services">SERVICES</NavLink>
            <NavLink href="#rooms">ROOMS</NavLink>
            <NavLink href="#gallery">GALLERY</NavLink>
            <NavLink href="#contact">CONTACT</NavLink>
          </div>
          <div className="mt-4">
            <a href="https://api.whatsapp.com/send?phone=919007062180">
              <button className="w-full bg-black text-white px-5 py-2 rounded-lg font-bold hover:bg-gray-700">
                BOOK NOW
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

