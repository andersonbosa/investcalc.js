'use client'

import Link from 'next/link'
import { useState } from 'react'

const MenuToggle = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="absolute w-full py-2 px-2">
      <div
        className="bg-orange-600 text-white rounded cursor-pointer focus:outline-none max-w-max right-2 absolute px-4 py-2 max-md:text-xs hover:scale-110"
        onClick={handleToggle}
      >
        Menu
      </div>

      {menuOpen && (
        <div className=" mt-2 bg-white shadow-xl rounded-md max-w-max right-2 absolute top-12">
          <ul className="py-2 px-4">
            {/* Use Link with a custom component */}
            <Link href="/" passHref onClick={handleToggle}>
              <li className="hover:bg-gray-100 py-1 cursor-pointer">
                <div className="text-gray-700">
                  Sobre
                </div>
              </li>
            </Link>

            {/* Use Link with a div element directly */}
            <Link href="/investir/criptomoeda" passHref onClick={handleToggle}>
              <div className="hover:bg-gray-100 py-1 cursor-pointer">
                <div className="text-gray-700">
                  Calcular lucro em criptomoedas
                </div>
              </div>
            </Link>

            {/* Use Link with a custom component */}
            {/* <Link href="/investir/rendavariavel" passHref onClick={handleToggle}>
              <li className="hover:bg-gray-100 py-1 cursor-pointer">
                <div className="text-gray-700">
                  Calcular lucro em renda variável
                </div>
              </li>
            </Link> */}
          </ul>
        </div>
      )}
    </div>
  )
}

export default MenuToggle
