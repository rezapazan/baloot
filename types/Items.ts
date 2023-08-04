export type Item = {
  id: number
  title: string
  categoryId: number
  price: number
  date: number
}

// Items Context
export type ItemsState = {
  page: number
  allItems: Item[]
  currentPage: Item[]
  pageSize: number
}

export type ItemsActions =
  | { type: 'ADD'; payload: { items: Item[] } }
  | {
      type: 'INCREASE_PAGE'
    }
  | { type: 'RESET' }
