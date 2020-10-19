import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button';
import { Box, Container } from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import ReplyIcon from '@material-ui/icons/Reply'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import { GlobalContext } from '../../context/GlobalState'
import './style.scss'

const VideoPlayerPage = (props) => {
  const { currentVidData, fetchCurrentVideo, currentChannelData, fetchCurrentChannel } = useContext(GlobalContext)
  const query = new URLSearchParams(props.location.search)
  const currentVidId = query.get('v')

  useEffect(() => {
    fetchCurrentVideo(currentVidId)
  }, [])

  useEffect(() => {
    if(currentVidData?.snippet?.channelId) {
      fetchCurrentChannel(currentVidData?.snippet?.channelId)
    }
  }, [currentVidData])

  return (
    <Container className="video-player">
      <Box className="video-player__contents">
        <iframe
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
              <p>{currentVidData?.statistics?.viewCount} Views &bull; {currentVidData?.snippet?.publishedAt}</p>
            </Box>
            <Box className="video-player__options">
              <Box className="option">
                <ThumbUpIcon className="icon"/> {currentVidData?.statistics?.likeCount}
              </Box>
              <Box className="option">
                <ThumbDownIcon className="icon"/> {currentVidData?.statistics?.dislikeCount}
              </Box>
              <Box className="option">
                <ReplyIcon className="icon"/> Share
              </Box>
              <Box className="option">
                <PlaylistAddIcon className="icon"/> Save
              </Box>
              <Box className="option">
                <MoreHorizIcon className="icon"/>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="video-player__channel">
          <Avatar
            src={currentChannelData.items ?.[0].snippet.thumbnails.medium.url}
            className="channel-profile"
            alt="channel-image"
          />
          <Box >
            <Box className="channel-title">
            {currentVidData?.snippet?.channelTitle}<CheckCircleIcon className="verified-icon" />
            </Box>
            <p className="channel-subs">{currentChannelData.items ?.[0].statistics.subscriberCount} subscribers</p>
            <p className="video-desp">
            {currentVidData?.snippet?.description}
            </p>
          </Box>
          <Box>
            <Button variant="contained" className="subscribe-button">
              Subscribe
            </Button>
          </Box>
        </Box>
        <Box>Comments {currentVidData?.statistics?.commentCount}</Box>
      </Box>
      <Box className="video-player__related-vids">Related Videos</Box>
    </Container>
  )
}

VideoPlayerPage.propTypes = {
  props: PropTypes.object,
}

export default VideoPlayerPage
