import React from 'react'
import InstagramApi from './InstagramApi'
import SpotifyApi from './SpotifyApi'
import { Group, Stack } from '@mantine/core'
import TikTok from './TikTok'

const Media = () => {
  return (
    <div>
      <Group gap="sm" justify="center">
          <InstagramApi />
          <Stack>
            <TikTok />
            <SpotifyApi />
          </Stack>

      </Group>
    </div>
  )
}

export default Media