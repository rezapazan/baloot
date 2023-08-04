import { Item } from '@/types'
import axios from '@/utils'

const pageLimit = 5

export const getItems = async (page: number, categoryId: number | null) => {
  let items = null

  if (categoryId !== null) {
    items = await axios.request({
      url: `/items`,
      method: 'GET',
      params: {
        categoryId,
        _page: page,
        _limit: pageLimit,
      },
    })
  } else {
    items = await axios.request({
      url: `/items`,
      method: 'GET',
      params: {
        _page: page,
        _limit: pageLimit,
      },
    })
  }

  return items.data as Item[]
}
