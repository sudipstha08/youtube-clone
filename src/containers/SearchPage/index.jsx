import React, { useContext, useEffect } from 'react'
import moment from 'moment'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import { GlobalContext } from '../../context/GlobalState'
import { formatCount } from '../../utils'
import ChannelRow from '../../components/ChannelRow'
import VideoRow from '../../components/VideoRow'
import Sidebar from '../../components/Sidebar'
import './style.scss'

const SearchPage = () => {
  const { searchVideos, searchResults } = useContext(GlobalContext)
  useEffect(() => {
    searchVideos()
  }, [window.location.search])

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
          image={searchResults?.items?.[0].snippet.thumbnails.default.url}
          channel={searchResults?.items?.[0].snippet.channelTitle}
          verified
          subs={formatCount(Math.random() * Math.pow(9, 6))}
          noOfVideos={formatCount(Math.random() * Math.pow(5, 5))}
          desp={searchResults?.items?.[0].snippet.description}
        />
        <hr />
        {searchResults?.items?.map((video) => (
          <VideoRow
            key={`video${video.id.videoId}`}
            vidId={video.id.videoId}
            title={video.snippet.title}
            views={formatCount(Math.random() * Math.pow(9, 7))}
            subs={formatCount(Math.random() * Math.pow(9, 6))}
            timeStamp={moment(video.snippet.publishTime).fromNow()}
            channelImage={video.snippet.thumbnails.default.url}
            image={video.snippet.thumbnails.medium.url}
            channel={video.snippet.channelTitle}
            desp={video.snippet.description}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchPage
