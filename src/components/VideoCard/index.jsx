import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import moment from 'moment'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { formatCount } from '../../utils'
import { GlobalContext } from '../../context/GlobalState'
import './style.scss'

const VideoCard = ({
  vidId,
  image,
  title,
  channel,
  timeStamp,
  channelImage,
  viewCount,
  channelId,
  subsCount,
}) => {
  const { fetchCurrentChannel } = useContext(GlobalContext)

  useEffect(() => {
    fetchCurrentChannel(channelId)
  }, [])

  const isVerified = parseInt(subsCount) >= 100000
  return (
    <div className="video-card">
      <Link to={`watch?v=${vidId}`}>
        <img src={image} alt="thumbnail" className="video-card__thumbnail" />
      </Link>

      <div className="video-card__info">
        <Avatar
          className="video-card__avatar"
          alt={channel}
          src={channelImage?.[0]?.snippet.thumbnails.medium.url}
        />
        <div className="video-card__text">
          <Link
            to={`watch?v=${vidId}`}
            style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }}
          >
            <h4>{title}</h4>
          </Link>
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <span className="video-card__channel-name">{channel} </span>
            &nbsp;
            {isVerified ? (
              <CheckCircleIcon className="video-card__channel-verification-icon" />
            ) : (
              ''
            )}
          </p>
          <p>
            {`${formatCount(viewCount)} views`}&nbsp;&bull;
            {moment(timeStamp).fromNow()}
          </p>
        </div>
      </div>
    </div>
  )
}

VideoCard.propTypes = {
  vidId: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  viewCount: PropTypes.string,
  timeStamp: PropTypes.string,
  channelImage: PropTypes.string,
  channelId: PropTypes.string,
  subsCount: PropTypes.number,
  loading: PropTypes.bool,
}

export default VideoCard
