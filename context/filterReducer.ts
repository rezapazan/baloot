import { filterActions, filterState } from '@/types'

export const FilterReducer: React.Reducer<filterState, filterActions> = (
  state,
  action
): filterState => {
  switch (action.type) {
    case 'SET':
      return { categoryId: action.payload.categoryId }
    case 'RESET':
      return { categoryId: null }
    default:
      return state
  }
}
