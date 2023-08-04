'use client'

import { useEffect } from 'react'
import Item from './components/Item'
import { useInView } from 'react-intersection-observer'
import { useItemsQuery } from '@/hooks/useItemsQuery'

const Category = () => {
  const { ref, inView } = useInView()
  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useItemsQuery()

  useEffect(() => {
    console.log(
      `%c data =>`,
      'background: #2ecc71;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5e',
      data
    )
  }, [data])

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage])

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 pb-10 pt-20 pl-10 font-IranSans'>
        {isSuccess &&
          data.pages.map(page =>
            page.map(item => (
              <Item
                key={item.id}
                title={item.title}
                date={item.date}
                price={item.price}
                id={item.id}
                categoryId={item.categoryId}
              />
            ))
          )}
        <div ref={ref}></div>
      </div>
      {isFetchingNextPage && (
        <p className='text-center font-bold font-Ahang'>
          در حال دریافت اطلاعات
        </p>
      )}
    </>
  )
}

export default Category
