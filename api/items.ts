import { Item } from '@/types'
import axios from '@/utils'

const pageLimit = 5

export const getItems = async (page: number) => {
  const items = await axios.request({
    url: `/items`,
    method: 'GET',
    timeout: 2000,
    params: {
      _page: page,
      _limit: pageLimit,
    },
  })

  return items.data as Item[]
}
