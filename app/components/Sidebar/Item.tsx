'use client'

import { Category } from '@/types'
import Link from 'next/link'
import { useEffect, useState, useTransition } from 'react'
import { usePathname } from 'next/navigation'

const Item = ({ name, path }: Category) => {
  const pathname = usePathname()
  const [, startTransition] = useTransition()
  const [activeClassName, setActiveClassName] = useState<string>('')

  useEffect(() => {
    pathname === path
      ? startTransition(() => {
          setActiveClassName('text-black')
        })
      : startTransition(() => {
          setActiveClassName('text-gray-500')
        })
  }, [path, pathname])

  return (
    <Link
      href={`/app/${path}`}
      className={`${activeClassName} flex h-9 w-full cursor-pointer items-center text-sm hover:text-red-primary transition-all ease-in-out duration-300`}
    >
      <span className='ml-3'>{name}</span>
    </Link>
  )
}

export default Item
