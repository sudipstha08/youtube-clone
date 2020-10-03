import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import './style.scss'

const VideoCard = ({
  image,
  title,
  channel,
  views,
  timeStamp,
  channelImage,
}) => {
  return (
    <div className="video-card">
      <img src={image} alt="thumbnail" className="video-card__thumbnail" />
      <div className="video-card__info">
        <Avatar
          className="video-card__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="video-card__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} &bull; {timeStamp}
          </p>
        </div>
      </div>
    </div>
  )
}

VideoCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  views: PropTypes.string,
  timeStamp: PropTypes.string,
  channelImage: PropTypes.string,
}

export default VideoCard
