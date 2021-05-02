import React, { useState, useEffect } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import RecommededVideos from '../../components/RecommendedVideos'
import Sidebar from '../../components/Sidebar'
import './style.scss'

const HomePage = () => {
  const [videos, setVideos] = useState([])
  const [channelDatas, setChannelDatas] = useState([])
  const [pageSize, setPageSize] = useState(36)
  const [loading, setLoading] = useState(false)

  const fetchVideos = async () => {
    try {
      setLoading(true)
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_API_KEY}&part=snippet,statistics&regionCode=US&chart=mostPopular&maxResults=${pageSize}`,
      )
      const json = await res.json()
      if (json) {
        setVideos(json.items)
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
  }, [pageSize])

  useEffect(() => {
    if (videos?.length !== 0) {
      const ids = videos?.map((video) => video?.snippet?.channelId)
      fetch(
        `https://www.googleapis.com/youtube/v3/channels?key=${
          process.env.REACT_APP_API_KEY
        }&part=snippet,statistics&id=${ids?.join()}`,
      )
        .then((res) => res.json())
        .then((data) => setChannelDatas(data))
    }
  }, [videos])

  useEffect(() => {
    const recommendedVideos = document.querySelector('.recommended-videos')
    window.addEventListener('scroll', () => {
      if (recommendedVideos.scrollHeight - window.scrollY < 400) {
        setPageSize((page) => page + 8)
      }
    })
  }, [])

  return (
    <div className="homepage">
      <div className="homepage__contents">
        <Sidebar />
        <RecommededVideos
          videos={videos || ''}
          channelDatas={channelDatas || ''}
          loading={loading}
        />
      </div>
    </div>
  )
}

export default HomePage
