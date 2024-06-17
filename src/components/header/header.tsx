'use client'

import { X, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { LogoSVG } from '../svg-components/logo-svg'
import { NavLinks } from './nav-links'
import {
  navBarAnimation,
  navBarCloseAnimation,
} from '@/animations/header/nav-bar-animation'

export function Header() {
  const [isNavOpen, setNavOpen] = useState<boolean>(false)

  function toggleNavBar() {
    if (isNavOpen) {
      navBarCloseAnimation().then(() => setNavOpen(false))
    } else {
      setNavOpen(true)
    }
  }

  useEffect(() => {
    if (isNavOpen) {
      navBarAnimation()
    }
  }, [isNavOpen])

  return (
    <header className="flex flex-col items-center justify-center gap-6 w-full sticky top-0">
      <div className="flex items-center justify-between md:gap-6 w-full">
        <div className="w-32 md:w-40">
          <LogoSVG />
        </div>
        <nav className="flex items-center justify-between md:w-1/2 w-full gap-4 sticky">
          <div className="hidden md:flex w-full">
            <NavLinks />
          </div>

          <div className="md:hidden flex items-center justify-end w-full">
            <button onClick={toggleNavBar}>
              {isNavOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </div>

      {isNavOpen && (
        <div
          className="md:hidden flex flex-col items-center justify-end basis-full"
          id="navbar"
        >
          <NavLinks />
        </div>
      )}
    </header>
  )
}
