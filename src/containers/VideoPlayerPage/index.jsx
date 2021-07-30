import React, { useEffect, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Truncate from 'react-truncate'
import Button from '@material-ui/core/Button'
import { Box, Container } from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import ReplyIcon from '@material-ui/icons/Reply'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { formatCount, numWithCommas } from '../../utils'
import { GlobalContext } from '../../context/GlobalState'
import './style.scss'

const VideoPlayerPage = (props) => {
  const {
    currentVidData,
    fetchCurrentVideo,
    currentChannelData,
    fetchCurrentChannel,
  } = useContext(GlobalContext)
  // eslint-disable-next-line react/prop-types
  const query = new URLSearchParams(props?.location?.search)
  const currentVidId = query.get('v')
  const [truncated, setTruncated] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const handleTruncate = (trunc) => {
    if (truncated !== trunc) {
      setTruncated(trunc)
    }
  }

  const toggleLines = () => {
    setExpanded((prevState) => !prevState)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchCurrentVideo(currentVidId)
  }, [])

  useEffect(() => {
    if (currentVidData?.snippet?.channelId) {
      fetchCurrentChannel(currentVidData?.snippet?.channelId)
    }
  }, [currentVidData])

  return (
    <Container className="video-player">
      <Box className="video-player__contents">
        <iframe
          title="video-player"
          width="853"
          height="480"
          autoPlay
          src={`https://www.youtube.com/embed/${currentVidId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Box className="video-player__desp">
          <Box className="video-player__title">
            <h3>{currentVidData?.snippet?.title}</h3>
          </Box>
          <Box className="video-player__infos">
            <Box className="views-count">
              <p>
                {numWithCommas(currentVidData?.statistics?.viewCount) || '0'}{' '}
                Views &bull;{' '}
                {moment(currentVidData?.snippet?.publishedAt).format(
                  'DD MMM YYYY',
                )}
              </p>
            </Box>
            <Box className="video-player__options">
              <Box className="option">
                <ThumbUpIcon className="icon" />{' '}
                {formatCount(currentVidData?.statistics?.likeCount)}
              </Box>
              <Box className="option">
                <ThumbDownIcon className="icon" />{' '}
                {formatCount(currentVidData?.statistics?.dislikeCount)}
              </Box>
              <Box className="option">
                <ReplyIcon className="icon" /> Share
              </Box>
              <Box className="option">
                <PlaylistAddIcon className="icon" /> Save
              </Box>
              <Box className="option">
                <MoreHorizIcon className="icon" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="video-player__channel">
          <Avatar
            src={currentChannelData.items?.[0].snippet.thumbnails.medium.url}
            className="channel-profile"
            alt="channel-image"
          />
          <Box
            style={{
              width: '80%',
              textAlign: 'left',
              float: 'left',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            <Box className="channel-title">
              {currentVidData?.snippet?.channelTitle}
              <CheckCircleIcon className="verified-icon" />
            </Box>
            <p className="channel-subs">
              {formatCount(
                currentChannelData?.items?.[0].statistics.subscriberCount,
              ) || '0'}{' '}
              subscribers
            </p>
            <Truncate
              lines={!expanded && 3}
              ellipsis={
                <span className="btn--read">
                  ...{' '}
                  <a href="#" onClick={toggleLines}>
                    <div>SHOW MORE</div>
                  </a>
                </span>
              }
              onTruncate={handleTruncate}
              className="video-desp"
            >
              {currentVidData?.snippet?.description}
            </Truncate>
            {!truncated && expanded && (
              <span className="btn--read">
                <a href="#" onClick={toggleLines}>
                  <div>SHOW LESS</div>
                </a>
              </span>
            )}
          </Box>
          <Box>
            <Button variant="contained" className="subscribe-button">
              Subscribe
            </Button>
          </Box>
        </Box>
        <Box className="video-player__comments">
          Comments {currentVidData?.statistics?.commentCount}
          <p>Hello World</p>
          <p>Enjoy coding ✨ </p>
        </Box>
      </Box>
      <Box className="video-player__related-vids">Related Videos</Box>
    </Container>
  )
}

VideoPlayerPage.propTypes = {
  props: PropTypes.shape({
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }),
  }),
}

VideoPlayerPage.defaultProps = {
  props: {
    location: {
      search: '',
    },
  },
}

export default VideoPlayerPage
