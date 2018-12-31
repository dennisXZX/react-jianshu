import { SEARCH_FOCUS, SEARCH_BLUR } from './actionTypes'

export const handleSearchFocus = () => (
  {
    type: SEARCH_FOCUS,
  }
)

export const handleSearchBlur = () => (
  {
    type: SEARCH_BLUR,
  }
)