import { useState } from 'react'
import { GiUnicorn } from "react-icons/gi";
import menu from '/icons/Nav/bx-menu.svg'
import bx from '/icons/Nav/bx-x.svg'


import { Outlet, Link } from 'react-router-dom'

const NabA = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <nav className="bg-pink-300 p-4 sticky top-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <GiUnicorn />
            <h1>logo</h1>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNav}>
              {!isMenuOpen ? <img src={menu} alt="menu" /> : <img src={bx} alt="close" />}
            </button>
          </div>
          <ul className="hidden md:flex">
            <li className="">
              <Link to="/" className="text-white hover:bg-white hover:text-black rounded-3xl text-2xl px-3">home</Link>
            </li>
          </ul>
          
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default NabA