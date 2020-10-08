import React, { useContext, useEffect } from 'react'

import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'

import { GlobalContext } from '../../context/GlobalState'
import ChannelRow from '../../components/ChannelRow'
import VideoRow from '../../components/VideoRow'
import Sidebar from '../../components/Sidebar'
import './style.scss'

const SearchPage = () => {
  const { searchVideos, searchResults, searchQuery } = useContext(GlobalContext)
  useEffect(() => {
    searchVideos()
  }, [])

  return (
    <div className="search-page">
      <Sidebar />
      <div className="search-page__contents">
        <div className="search-page__filter">
          <TuneOutlinedIcon />
          <h5>FILTER</h5>
        </div>
        <hr />
        <ChannelRow
          image="https://lh3.googleusercontent.com/a-/AOh14GjuMf0BMPOIsvjsi1shlvjcrUv3-bJrN9TdLMu9Ew=s88-c-k-c0x00ffffff-no-rj-mo"
          channel="John Wick"
          verified
          subs="100k"
          noOfVideos={200}
          desp="Level up your coding skills here by watching hundred of indetailed videos on HTML, CSS and JS"
        />
        <hr />
        {searchResults?.items?.map((video) => 
          <VideoRow
            title={video.snippet.title}
            views="2.3M"
            subs="500k"
            timeStamp="5 days ago"
            channelImage={video.snippet.thumbnails.default.url}
            image={video.snippet.thumbnails.medium.url}
            channel={video.snippet.channelTitle}
            desp={video.snippet.description}
          />
        )}
      </div>
    </div>
  )
}

export default SearchPage
