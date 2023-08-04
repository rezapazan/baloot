import { useInfiniteQuery } from '@tanstack/react-query'
import { getItems } from '@/api/items'

const LIMIT = 5

export const useItemsQuery = () => {
  return useInfiniteQuery(
    ['items'],
    ({ pageParam = 1 }) => getItems(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage =
          lastPage.length === LIMIT ? allPages.length + 1 : undefined
        return nextPage
      },
    }
  )
}
