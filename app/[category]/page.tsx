'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useItemsQuery } from '@/hooks/useItemsQuery'
import Item from './components/Item'

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

  return (
    <div className='grid grid-cols-3 gap-7 pb-10 pt-20 pl-10 font-IranSans'>
      {isLoading || isFetching ? (
        <p className='font-Ahang text-lg font-bold'>در حال دریافت اطلاعات...</p>
      ) : data ? (
        data.map(item => (
          <Item
            key={item.id}
            title={item.title}
            date={item.date}
            price={item.price}
            id={item.id}
            categoryId={item.categoryId}
          />
        ))
      ) : error ? (
        <p>خطایی رخ داده است</p>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Category
