'use client'
import React, { useEffect, useState } from 'react'
import InstagramApi from './InstagramApi'
import SpotifyApi from './SpotifyApi'
import { Group, Stack, Title } from '@mantine/core'
import TikTok from './TikTok'
import YoutubeApi from './YoutubeApi'

const Media = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  return (
    <div className="bg-slate-800 p-2">
      <Title order={1} className='text-slate-200 pb-4 flex justify-center'>Seguinos en nuestras redes </Title>
      { isMobile ? (
      <Stack gap="xs" align="stretch" justify="flex-start">
          <InstagramApi />
          <TikTok />
          <SpotifyApi />
          <YoutubeApi />
      </Stack>
          ) : (
          <Group gap="" justify="center" className='flex items-start'>
              <InstagramApi />
              <TikTok />
            <Stack>
              <YoutubeApi />
              <SpotifyApi />
            </Stack>
          </Group>
          )
          }
    </div>
  )
}

export default Media