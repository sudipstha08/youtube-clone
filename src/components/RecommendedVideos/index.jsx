import React from 'react'
import VideoCard from '../VideoCard'
import PropTypes from 'prop-types'
import './style.scss'

const RecommendedVideos = ({ videos, channelDatas }) => {
  return (
    <div className="recommended-videos">
      <section className="recommended-videos__videos">
        {videos?.map((video) => (
          <VideoCard
            key={`video${video.id}`}
            vidId={video.id}
            title={video.snippet.title}
            viewCount={video.statistics.viewCount}
            timeStamp={video.snippet.publishedAt}
            channelId={video.snippet.channelId}
            channelImage={channelDatas.items?.filter(
              (channel) => channel.id === video?.snippet.channelId,
            )}
            subsCount={
              channelDatas?.items?.filter(
                (channel) => channel.id === video?.snippet.channelId,
              )?.[0]?.statistics.subscriberCount
            }
            image={video.snippet.thumbnails.medium.url}
            channel={video.snippet.channelTitle}
          />
        ))}
      </section>
    </div>
  )
}

export default RecommendedVideos

RecommendedVideos.propTypes = {
  videos: PropTypes.array,
  channelDatas: PropTypes.object,
}
