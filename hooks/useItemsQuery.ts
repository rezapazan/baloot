import { useQuery } from '@tanstack/react-query'
import { getItems } from '@/api/items'

const queryKeys = ['items']

export const useItemsQuery = () => {
  return useQuery({
    queryKey: queryKeys,
    queryFn: () => getItems(),
  })
}
