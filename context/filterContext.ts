import { filterActions, filterState } from '@/types'
import { Dispatch, createContext, useContext } from 'react'

export const filterInitialState: filterState = {
  categoryId: null,
}

export const FilterContext = createContext<
  [filterState, Dispatch<filterActions>]
>([filterInitialState, () => {}])
export const useFilter = () => useContext(FilterContext)
