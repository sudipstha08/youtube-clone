export default (state, action) => {
  switch (action.type) {
    case 'SEARCH_VIDEOS':
      return { ...state, searchResults: action.payload }
    case 'HANDLE_CHANGE_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload }
    default:
      return state
  }
}
