import { useState } from 'react'
import menu from '/icons/Nav/bx-menu.svg'
import bx from '/icons/Nav/bx-x.svg'

import { BuildingOffice2Icon } from '@heroicons/react/24/outline'

import { Outlet, Link } from 'react-router-dom'

const NavLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const closeNav = () => {
    setIsMenuOpen(false)
  }
  return (
    <>
      <nav className="bg-blue-400 p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between container mx-auto">
          <div className="flex items-center text-4xl font-bold">
            <BuildingOffice2Icon className="flex-shrink-0 w-8 h-8"/>
            <h1 className="ml-4 text-white ">LC</h1>
          </div>
          <div className="md:hidden">
            <button className="" onClick={toggleNav}>
              {!isMenuOpen ? <img src={menu} alt="menu" /> : <img src={bx} alt="close" />}
            </button>
          </div>
          
          <ul className="hidden md:flex space-x-4">
            <li><Link to="/" className="text-white hover:bg-white rounded-3xl hover:text-black px-3 text-2xl">Home</Link></li>
            <li><Link to="/about" className="text-white hover:bg-white rounded-3xl hover:text-black px-3 text-2xl">About</Link></li>
            <li><Link to="/dashboard" className="text-white hover:bg-white rounded-3xl hover:text-black px-3 text-2xl">Dashboard</Link></li>
            <li><Link to="/testing" className="text-white hover:bg-white rounded-3xl hover:text-black px-3 text-2xl">nav t1</Link></li>
          </ul>
          
        </div>
        {isMenuOpen ? (
           <>
             <div className="md:hidden mb-2">
             <hr className="mt-4" />
             <div className="mt-6">
               <ul>
                 <li className="hover:bg-blue-300 text-center rounded-3xl"><Link to='/' className="text-white" onClick={closeNav}>Home</Link></li>
                 <li className="hover:bg-blue-300 text-center rounded-3xl"><Link to='/about' className="text-white" onClick={closeNav}>About</Link></li>
                 <li className="hover:bg-blue-300 text-center rounded-3xl"><Link to='/dashboard' className="text-white" onClick={closeNav}>Dashboard</Link></li>
                 <li className="hover:bg-blue-300 text-center rounded-3xl"><Link to='/testing' className="text-white" onClick={closeNav}>nav 1</Link></li>
               </ul>
             </div>
             </div>
           </>
        ): null}
        
      </nav>
      <Outlet />
    </>
  )
}

export default NavLayout