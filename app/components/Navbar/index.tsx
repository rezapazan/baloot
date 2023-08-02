import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className='border-gray-200 fixed top-0 z-10 flex h-16 w-full items-center justify-between border-b-2 bg-white'>
      <Logo />
      <button className='bg-red-primary text-white hover:bg-red-secondary ml-5 px-6 py-2 rounded font-IranSans font-bold text-sm transition-all ease-in-out duration-300'>
        ثبت‌نام
      </button>
    </nav>
  )
}

export default Navbar
