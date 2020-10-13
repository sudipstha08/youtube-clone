import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

import AppReducer from './AppReducer'

const initialState = {
  searchResults: {},
  searchQuery: '',
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // ACTIONS
  function searchVideos() {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${state.searchQuery}&key=${process.env.REACT_APP_API_KEY}&part=snippet&maxResults=20`,
    )
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: 'SEARCH_VIDEOS',
          payload: data,
        }),
      )
  }

  function handleChangeSearchQuery(query) {
    dispatch({
      type: 'HANDLE_CHANGE_SEARCH_QUERY',
      payload: query,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        searchResults: state.searchResults,
        searchVideos,
        handleChangeSearchQuery,
        searchQuery: state.searchQuery,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

GlobalProvider.propTypes = {
  children: PropTypes.node,
}
