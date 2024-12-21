import React from 'react'
import InstagramApi from './InstagramApi'
import SpotifyApi from './SpotifyApi'
import { Group } from '@mantine/core'

const Media = () => {
  return (
    <Group gap="sm" justify="center">
        <InstagramApi />
        <SpotifyApi />
    </Group>
  )
}

export default Media