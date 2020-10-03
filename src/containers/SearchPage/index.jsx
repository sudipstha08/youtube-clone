import React from 'react'

import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from '../../components/ChannelRow'
import VideoRow from '../../components/VideoRow'
import Sidebar from '../../components/Sidebar'
import './style.scss'

const SearchPage = () => {
  return (
    <div className="search-page">
      <Sidebar />
      <div className="search-page__contents">
        <div className="search-page__filter">
          <TuneOutlinedIcon />
          <h5>FILTER</h5>
        </div>
        <hr />
        <ChannelRow
          image="https://lh3.googleusercontent.com/a-/AOh14GjuMf0BMPOIsvjsi1shlvjcrUv3-bJrN9TdLMu9Ew=s88-c-k-c0x00ffffff-no-rj-mo"
          channel="John Wick"
          verified
          subs="100k"
          noOfVideos={200}
          desp="Level up your coding skills here by watching hundred of indetailed videos on HTML, CSS and JS"
        />
        <hr />
        <VideoRow
          title="Become a web developer in 2020"
          views="2.3M"
          subs="500k"
          timeStamp="5 days ago"
          channelImage="https://lh3.googleusercontent.com/a-/AOh14GjuMf0BMPOIsvjsi1shlvjcrUv3-bJrN9TdLMu9Ew=s88-c-k-c0x00ffffff-no-rj-mo"
          image="https://i.ytimg.com/vi/lziuNMk_8eQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAXPwUqEzjhMrM3wQw-BNbs3-FNnw"
          channel="Sudip Shrestha"
          desp="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training ..."
        />
        <VideoRow
          title="Become a web developer in 2020"
          views="2.3M"
          subs="500k"
          timeStamp="5 days ago"
          channelImage="https://lh3.googleusercontent.com/a-/AOh14GjuMf0BMPOIsvjsi1shlvjcrUv3-bJrN9TdLMu9Ew=s88-c-k-c0x00ffffff-no-rj-mo"
          image="https://i.ytimg.com/vi/lziuNMk_8eQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAXPwUqEzjhMrM3wQw-BNbs3-FNnw"
          channel="Sudip Shrestha"
          desp="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training ..."
        />
        <VideoRow
          title="Become a web developer in 2020"
          views="2.3M"
          subs="500k"
          timeStamp="5 days ago"
          channelImage="https://lh3.googleusercontent.com/a-/AOh14GjuMf0BMPOIsvjsi1shlvjcrUv3-bJrN9TdLMu9Ew=s88-c-k-c0x00ffffff-no-rj-mo"
          image="https://i.ytimg.com/vi/lziuNMk_8eQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAXPwUqEzjhMrM3wQw-BNbs3-FNnw"
          channel="Sudip Shrestha"
          desp="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training ..."
        />
        <VideoRow
          title="Become a web developer in 2020"
          views="2.3M"
          subs="500k"
          timeStamp="5 days ago"
          channelImage="https://lh3.googleusercontent.com/a-/AOh14GjuMf0BMPOIsvjsi1shlvjcrUv3-bJrN9TdLMu9Ew=s88-c-k-c0x00ffffff-no-rj-mo"
          image="https://i.ytimg.com/vi/lziuNMk_8eQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAXPwUqEzjhMrM3wQw-BNbs3-FNnw"
          channel="Sudip Shrestha"
          desp="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training ..."
        />
      </div>
    </div>
  )
}

export default SearchPage
