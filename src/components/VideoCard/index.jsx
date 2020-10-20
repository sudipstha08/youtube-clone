import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar'
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
}) => {
  const { fetchCurrentChannel } = useContext(GlobalContext)
  const [vidTimeStamp, setVidTimeStamp] = useState('')

  useEffect(() => {
    fetchCurrentChannel(channelId)
  }, [])

  const dateNow = new Date()
  const date = new Date(timeStamp)
  const sec = dateNow - date
  const times = sec/(60*60*1000)

  useEffect(() => {
    if(times >= 8760) {
      const day = Math.floor(times / 24)
      setVidTimeStamp(`${day} day ago`)
    } else if (times >= 720) {
      const day = Math.floor(times / 24)
      setVidTimeStamp(`${day} day ago`)
    } else if (times >= 24) {
      const day = Math.floor(times / 24)
      setVidTimeStamp(`${day} day ago`)
    } else {
      setVidTimeStamp(`${Math.floor(times)} hours ago`)
    }
  }, [vidTimeStamp])
 

  return (
    <div className="video-card">
      <Link to={`watch?v=${vidId}`}>
        <img src={image} alt="thumbnail" className="video-card__thumbnail" />
      </Link>

      <div className="video-card__info">
        <Avatar
          className="video-card__avatar"
          alt={channel}
          src={channelImage?.[0].snippet.thumbnails.medium.url}
        />
        <div className="video-card__text">
          <Link
            to={`watch?v=${vidId}`}
            style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }}
          >
            <h4>{title}</h4>
          </Link>
          <p>{channel}</p>
          <p>
            {viewCount} views &bull; {vidTimeStamp}
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
}

export default VideoCard
