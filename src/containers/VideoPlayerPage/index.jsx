import React from 'react'

import { Box, Container } from '@material-ui/core'

const VideoPlayerPage = () => {
  return (
    <Container>
      <Box>
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/K_xNssdrm34?list=RDK_xNssdrm34"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Box>
          <Box>
            <h3>
              NEPATHYA LIVE IN CONCERT - Nepathya Australia Tour 2012
              (Melbourne) - Resham
            </h3>
          </Box>
          <Box>
            <Box>
              <p>28055 Views &bull; 23 Sep 2013</p>
            </Box>
            <Box>
              <Box>THumbicon 587</Box>
              <Box>THumbdownicon 587</Box>
              <Box>Share Icon Share</Box>
              <Box>SaveIcon Save</Box>
              <Box>MoreIcon</Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box>image</Box>
          <Box>channel desp</Box>
          <Box>btn</Box>
        </Box>
        <Box>Comments</Box>
      </Box>
      <Box>Related Videos</Box>
    </Container>
  )
}

export default VideoPlayerPage
