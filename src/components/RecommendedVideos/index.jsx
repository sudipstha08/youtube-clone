import React from 'react'
import VideoCard from '../VideoCard'

import './style.scss'

const RecommendedVideos = ({ videos, channelDatas }) => {
  return (
    <div className="recommended-videos">
      <section className="recommended-videos__videos">
        {videos?.map((video, idx) => (
          <VideoCard
            vidId={video.id}
            title={video.snippet.title}
            viewCount={video.statistics.viewCount}
            timeStamp={video.snippet.publishedAt}
            channelId={video.snippet.channelId}
            channelImage={channelDatas.items?.filter(channel => channel.id === video.snippet.channelId)}
            image={video.snippet.thumbnails.medium.url}
            channel={video.snippet.channelTitle}
          />
        ))}
      </section>
    </div>
  )
}

export default RecommendedVideos
