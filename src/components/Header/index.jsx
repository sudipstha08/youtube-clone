import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Popover from '@material-ui/core/Popover'
import NotificationsIcon from '@material-ui/icons/Notifications'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import MenuIcon from '@material-ui/icons/Menu'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import { GlobalContext } from '../../context/GlobalState'
import YoutubeLogo from '../../assets/icons/youtube.png'
import ProfileImage from '../../assets/images/coder.jpg'
import './style.scss'

const Header = ({ history }) => {
  const { searchQuery, handleChangeSearchQuery } = useContext(GlobalContext)
  const handleSearchChange = (e) => {
    handleChangeSearchQuery(e.target.value)
  }

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' && searchQuery !== '') {
      history.push(`/results?search_query=${searchQuery}`)
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <header className="header">
      <div className="header__left">
        <MenuIcon className="header__icon" />
        <Link to="/">
          <img src={YoutubeLogo} className="header__logo" alt="logo" />
        </Link>
      </div>
      <div className="header__input">
        <input
          type="text"
          placeholder="Search"
          onKeyDown={handleSearchKeyDown}
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {searchQuery === '' ? (
          <Link
            to={`/results?search_query=${searchQuery}`}
            onClick={(e) => e.preventDefault()}
          >
            <SearchIcon className="header__input-btn" />
          </Link>
        ) : (
          <Link to={`/results?search_query=${searchQuery}`}>
            <SearchIcon className="header__input-btn" />
          </Link>
        )}
      </div>
      <div className="header__right">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />

        <Avatar alt="image" src={ProfileImage} onClick={handleClick} />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          className="header__avatar"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Button variant="contained" color="primary">
            Sign out
          </Button>
        </Popover>
      </div>
    </header>
  )
}

Header.propTypes = {
  history: PropTypes.object,
}

export default withRouter(Header)
