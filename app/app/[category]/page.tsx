'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useItemsQuery } from '@/hooks/useItemsQuery'

const Category = () => {
  const pathname = usePathname()
  const { data, isLoading, isFetching, error } = useItemsQuery()

  useEffect(() => {
    console.log(
      `%c data =>`,
      'background: #e70000;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em',
      data
    )
  }, [data])

  useEffect(() => {
    console.log(
      `%c pathname =>`,
      'background: #2ecc71;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5e',
      pathname
    )
  }, [pathname])

  return <div>FUCK</div>
}

export default Category
