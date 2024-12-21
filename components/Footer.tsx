'use client'
import { AppShell, Group } from '@mantine/core'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <AppShell.Footer>
      <Group justify='center' gap='xl'>
      <div>© CUMBIA PARA TODXS 2021</div>
      <Group>
        <div><SocialIcon network='spotify' url='https:/www.spotify.com/' target='_blank'/><a href='https:/www.spotify.com/'>SPOTIFY</a> </div>
        <div><SocialIcon network='youtube' url='https:/www.youtube.com/' target='_blank'/><a href='https:/www.youtube.com/'>YOUTUBE</a> </div>
        <div><SocialIcon network='tiktok' url='https:/www.tiktok.com/' target='_blank'/><a href='https:/www.tiktok.com/'>TIK TOK</a> </div>
        <div><SocialIcon network='instagram' url='https:/www.instagram.com/' target='_blank'/><a href='https:/www.instagram.com/'>INSTAGRAM</a> </div>
      </Group>
      <div>🪘Sachita for ever ❤️ </div>
      </Group>
    </AppShell.Footer>
  )
}

export default Footer