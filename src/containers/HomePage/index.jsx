import React, { useState, useEffect } from 'react'

import RecommededVideos from '../../components/RecommendedVideos'
import Sidebar from '../../components/Sidebar'
import './style.scss'

const HomePage = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_API_KEY}&part=snippet&regionCode=US&chart=mostPopular&maxResults=20`,
    )
      .then((res) => res.json())
      .then((data) => setVideos(data.items))
  }, [])

  return (
    <div className="homepage">
      <div className="homepage__contents">
        <Sidebar />
        <RecommededVideos videos={videos} />
      </div>
    </div>
  )
}

export default HomePage
