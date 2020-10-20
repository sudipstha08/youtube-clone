import React, { useState, useEffect } from 'react'

import RecommededVideos from '../../components/RecommendedVideos'
import Sidebar from '../../components/Sidebar'
import './style.scss'

const HomePage = () => {
  const [videos, setVideos] = useState([])
  const [channelDatas, setChannelDatas] = useState([])
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_API_KEY}&part=snippet,statistics&regionCode=US&chart=mostPopular&maxResults=32`,
    )
      .then((res) => res.json())
      .then((data) => setVideos(data.items))
  }, [])

  useEffect(() => {
    if (videos.length != 0) {
      const ids = videos.map((video) => video.snippet.channelId)

      fetch(
        `https://www.googleapis.com/youtube/v3/channels?key=${
          process.env.REACT_APP_API_KEY
        }&part=snippet,statistics&id=${ids.join()}`,
      )
        .then((res) => res.json())
        .then((data) => setChannelDatas(data))
    }
  }, [videos])

  return (
    <div className="homepage">
      <div className="homepage__contents">
        <Sidebar />
        <RecommededVideos videos={videos} channelDatas={channelDatas} />
      </div>
    </div>
  )
}

export default HomePage
