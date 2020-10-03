import React from 'react'

import RecommededVideos from '../../components/RecommendedVideos'
import Sidebar from '../../components/Sidebar'
import './style.scss'

const HomePage = () => {
  return (
    <div className="homepage">
      {/* <Header /> */}
      <div className="homepage__contents">
        <Sidebar />
        <RecommededVideos />
      </div>
    </div>
  )
}

export default HomePage
