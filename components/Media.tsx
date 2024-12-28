import React from 'react'
import InstagramApi from './InstagramApi'
import SpotifyApi from './SpotifyApi'
import { Group, Stack } from '@mantine/core'
import TikTok from './TikTok'
import YoutubeApi from './YoutubeApi'

const Media = () => {
  return (
    <div className="bg-slate-200x p-8">
      <Group gap="lg" justify="center" className='flex items-start'>
          <InstagramApi />
          <TikTok />
          <Stack>
            <SpotifyApi />
            <YoutubeApi />
          </Stack>
      </Group>
    </div>
  )
}

export default Media