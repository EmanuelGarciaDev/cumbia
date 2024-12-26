import React from 'react'
import InstagramApi from './InstagramApi'
import SpotifyApi from './SpotifyApi'
import { Group, Stack } from '@mantine/core'
import TikTok from './TikTok'

const Media = () => {
  return (
    <div className=" p-8">
      <Group gap="sm" justify="center">
          <InstagramApi />
            <TikTok />
            <SpotifyApi />
      </Group>
    </div>
  )
}

export default Media