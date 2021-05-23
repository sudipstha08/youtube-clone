import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import AppReducer from './AppReducer'

const initialState = {
  searchResults: {},
  searchQuery: '',
  searchTrigger: false,
  currentVidData: {},
  currentChannelData: {},
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // ACTIONS
  function searchVideos() {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${state.searchQuery}&key=${process.env.REACT_APP_API_KEY}&part=snippet&maxResults=30`,
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

  function fetchCurrentVideo(currentVidId) {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_API_KEY}&part=snippet,statistics&id=${currentVidId}`,
    )
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: 'FETCH_CURRENT_VIDEO',
          payload: data.items[0],
        }),
      )
  }

  function fetchCurrentChannel(channelId) {
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?key=${process.env.REACT_APP_API_KEY}&part=snippet,statistics&id=${channelId}`,
    )
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: 'FETCH_CURRENT_CHANNEL',
          payload: data,
        }),
      )
  }

  return (
    <GlobalContext.Provider
      value={{
        searchResults: state.searchResults,
        searchVideos,
        handleChangeSearchQuery,
        searchQuery: state.searchQuery,
        fetchCurrentVideo,
        currentVidData: state.currentVidData,
        fetchCurrentChannel,
        currentChannelData: state.currentChannelData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

GlobalProvider.propTypes = {
  children: PropTypes.node,
}
