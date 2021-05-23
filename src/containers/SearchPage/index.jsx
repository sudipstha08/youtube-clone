import React, { useContext, useEffect } from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import { GlobalContext } from '../../context/GlobalState'
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
          image="https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"
          channel="John Wick"
          verified
          subs="100k"
          noOfVideos={200}
          desp="Level up your skills by watching hundred of videos here"
        />
        <hr />
        {searchResults?.items?.map((video) => (
          <VideoRow
            key={`video${video.id.videoId}`}
            vidId={video.id.videoId}
            title={video.snippet.title}
            views="2.3M"
            subs="500k"
            timeStamp="5 days ago"
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
