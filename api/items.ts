import { Item } from '@/types'
import axios from '@/utils'

export const getItems = async () => {
  const locations = await axios.request({
    url: `/items`,
    method: 'GET',
    timeout: 2000,
  })

  return locations.data as Item[]
}
