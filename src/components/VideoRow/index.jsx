import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './style.scss'

const VideoRow = ({
  vidId,
  views,
  subs,
  desp,
  timeStamp,
  channel,
  title,
  image,
}) => {
  return (
    <div className="video-row">
      <Link to={`watch?v=${vidId}`}>
        <img src={image} alt="channel" />
      </Link>
      <div className="video-row__text">
        <h3>{title}</h3>
        <p className="video-row__headline">
          {channel} &bull;{' '}
          <span>
            <span>{subs}</span> Subscribers
          </span>{' '}
          &bull; {views} views &bull;&nbsp;{timeStamp}
        </p>
        <p className="video-row__desp">{desp}</p>
      </div>
    </div>
  )
}

VideoRow.propTypes = {
  vidId: PropTypes.string,
  views: PropTypes.string,
  subs: PropTypes.string,
  desp: PropTypes.string,
  timeStamp: PropTypes.string,
  channel: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
}

export default VideoRow
