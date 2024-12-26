import { Box } from '@mantine/core'
import React from 'react'

const SpotifyApi = () => {
  return (
    <Box>
      <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/artist/2bdVMwVcL0GYXFj2NVktqL?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </Box>
  )
}

export default SpotifyApi