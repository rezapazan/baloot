'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const Category = () => {
  const pathname = usePathname()

  useEffect(() => {
    console.log(
      `%c pathname =>`,
      'background: #2ecc71;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5e',
      pathname
    )
  }, [pathname])

  return <main>Category</main>
}

export default Category
