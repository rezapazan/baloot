import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link
      className='border-gray-200 flex items-center justify-center text-2xl h-1/2 w-32 border-l-2 text-center font-IranSans font-bold'
      href={'/'}
    >
      بلوط
    </Link>
  )
}

export default Logo
