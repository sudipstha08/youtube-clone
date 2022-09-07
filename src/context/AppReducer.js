export default (state, action) => {
  switch (action.type) {
    case 'SEARCH_VIDEOS':
      return { ...state, searchResults: action.payload }
    case 'HANDLE_CHANGE_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload }
    case 'FETCH_CURRENT_VIDEO':
      return { ...state, currentVidData: action.payload }
    case 'FETCH_CURRENT_CHANNEL':
      return { ...state, currentChannelData: action.payload }
    default:
      return state
  }
}
