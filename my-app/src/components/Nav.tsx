'use client'
import React, { useState } from 'react'
import { useScroll } from '../providers/ScrollProvider'
import { Hamburger } from 'lucide-react'

const MENU_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Nav: React.FC = () => {
  const { position } = useScroll()
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors text-sky-900 ${
        position?.y > 0 && 'bg-sky-600/70 shadow backdrop-blur text-white'
      }`}
    >
      <nav className="px-6 md:px-0 md:container mx-auto h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold font-young-serif">Josh Rouwhorst</div>
        {/* Nav Menu */}
        <ul className="space-x-6 font-mono hidden md:flex">
          {MENU_ITEMS.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:opacity-70 transition-opacity"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-end">
          <button
            type="button"
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-900 cursor-pointer"
            aria-label="Open menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Hamburger size={28} />
          </button>

          <div
            className={`absolute w-full left-0 top-15 z-50 transition-opacity ${
              open ? 'visible' : 'hidden'
            }`}
          >
            <div className="w-[80vw] mx-auto bg-white shadow-lg rounded-lg py-4 px-6 flex flex-col space-y-4 z-50 text-center">
              {MENU_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-mono text-sky-900 hover:opacity-70 transition-opacity"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav
