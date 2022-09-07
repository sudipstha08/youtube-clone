import React, { useState, useEffect } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import RecommededVideos from '../../components/RecommendedVideos'
import Sidebar from '../../components/Sidebar'
import './style.scss'

const HomePage = () => {
  const [videos, setVideos] = useState([])
  const [channelDatas, setChannelDatas] = useState([])
  const [pageSize] = useState(70)

  const fetchVideos = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_API_KEY}&part=snippet,statistics&regionCode=US&chart=mostPopular&maxResults=${pageSize}`,
      )
      const json = await res.json()
      if (json) {
        setVideos(json?.items)
      }
    } catch (err) {
      return (
        <Snackbar autoHideDuration={6000}>
          <Alert severity="success">This is a success message!</Alert>
        </Snackbar>
      )
    }
  }

  useEffect(() => {
    fetchVideos()
  }, [])

  useEffect(() => {
    if (videos?.length !== 0) {
      const ids = videos?.map((video) => video?.snippet?.channelId)
      fetch(
        `https://www.googleapis.com/youtube/v3/channels?key=${
          process.env.REACT_APP_API_KEY
        }&part=snippet,statistics&id=${ids?.join()}`,
      )
        .then((res) => res?.json())
        .then((data) => setChannelDatas(data))
    }
  }, [videos])

  return (
    <div className="homepage">
      <div className="homepage__contents">
        <Sidebar />
        <RecommededVideos videos={videos} channelDatas={channelDatas} />
      </div>
    </div>
  )
}

export default HomePage
