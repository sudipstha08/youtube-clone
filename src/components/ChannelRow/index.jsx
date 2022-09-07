import React from 'react'
import PropTypes from 'prop-types'

import { Avatar } from '@material-ui/core'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
import './style.scss'

const ChannelRow = ({ image, channel, verified, subs, noOfVideos, desp }) => {
  return (
    <div className="channel-row">
      <Avatar src={image} className="channel-row__logo" alt={channel} />
      <div className="channel-row__text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers &bull; {noOfVideos} videos
        </p>
        <p>{desp}</p>
      </div>
    </div>
  )
}

ChannelRow.propTypes = {
  image: PropTypes.string,
  channel: PropTypes.string,
  verified: PropTypes.bool,
  subs: PropTypes.string,
  noOfVideos: PropTypes.number,
  desp: PropTypes.string,
}
export default ChannelRow
