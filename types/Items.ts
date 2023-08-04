export type Item = {
  id: number
  title: string
  categoryId: number
  price: number
  date: number
}

// Items' filter Context
export type filterState = {
  categoryId: number | null
}

export type filterActions =
  | { type: 'SET'; payload: filterState }
  | { type: 'RESET' }
