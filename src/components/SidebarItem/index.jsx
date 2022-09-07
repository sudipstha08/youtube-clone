import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const SidebarItem = ({ selected, title, Icon }) => {
  return (
    <div className={`sidebar-item ${selected && 'sidebar-item--selected'}`}>
      <Icon className="sidebar-item__icon" />
      <h3 className="sidebar-item__title">{title}</h3>
    </div>
  )
}

export default SidebarItem

SidebarItem.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.object,
  selected: PropTypes.bool,
}
