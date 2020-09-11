import React from 'react'

import NotificationsIcon from '@material-ui/icons/Notifications'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import MenuIcon from '@material-ui/icons/Menu'
import Avatar from '@material-ui/core/Avatar'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// import YoutubeLogo from '../../assets/icons/youtube.png'
// import ProfileImage from '../../assets/images/coder.jpg'
import './header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          src={YoutubeLogo}
          className="header__logo"
          height="20"
          alt="logo"
        />
      </div>
      <div className="header__input">
        <input type="text" />
        <SearchIcon className="header__input-button" />
      </div>
      <div className="header__right">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar alt="image" src={ProfileImage} />
      </div>
    </div>
  )
}

export default Header
