export const SEARCH_FOCUS = 'search_focus'
export const SEARCH_BLUR = 'search_blur'

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