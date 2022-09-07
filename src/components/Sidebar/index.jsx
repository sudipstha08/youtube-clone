import React from 'react'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUp'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import HistoryIcon from '@material-ui/icons/History'
import HomeIcon from '@material-ui/icons/Home'
import SidebarItem from '../SidebarItem'
import './style.scss'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <SidebarItem selected title="Home" Icon={HomeIcon} />
      <SidebarItem title="Trending" Icon={WhatshotIcon} />
      <SidebarItem title="Subscriptions" Icon={SubscriptionsIcon} />
      <hr />
      <SidebarItem title="Library" Icon={VideoLibraryIcon} />
      <SidebarItem title="History" Icon={HistoryIcon} />
      <SidebarItem title="Your Videos" Icon={OndemandVideoIcon} />
      <SidebarItem title="Watch Later" Icon={WatchLaterIcon} />
      <SidebarItem title="Liked Videos" Icon={ThumbUpAltOutlinedIcon} />
      <SidebarItem title="Show 296 more" Icon={ExpandMoreOutlinedIcon} />
      <hr />
    </aside>
  )
}

export default Sidebar
