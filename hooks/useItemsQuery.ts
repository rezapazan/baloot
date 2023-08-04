import { useInfiniteQuery } from '@tanstack/react-query'
import { getItems } from '@/api/items'
import { useFilter } from '@/context/filterContext'
import { useEffect } from 'react'

const LIMIT = 5

export const useItemsQuery = () => {
  const [filter] = useFilter()

  useEffect(() => {
    console.log(filter)
  }, [filter])

  return useInfiniteQuery(
    ['items', filter.categoryId],
    ({ pageParam = 1 }) => getItems(pageParam, filter.categoryId),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage =
          lastPage.length === LIMIT ? allPages.length + 1 : undefined
        return nextPage
      },
    }
  )
}
