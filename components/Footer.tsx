'use client'
import { AppShell, Container, Group } from '@mantine/core'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  const networks = [{
    name: 'spotify',
    url: 'https://open.spotify.com/artist/2bdVMwVcL0GYXFj2NVktqL?si=_--2pgnlS-eiAXd5xgw7gQ'
  },
  {
    name: 'youtube',
    url: 'https://youtube.com/@cumbiaparatodxs?si=TZdkGUZ36WUYZZU_'
  },
  {
    name: 'tiktok',
    url: 'https://www.tiktok.com/@cumbiaparatodxs'
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/cumbiaparatodxs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
  }]
  return (
    <div className=' justify-center w-full bg-slate-900	 text-white font-bold py-[6px]'>
      <Group justify='center' gap='xs'>
      <div>🪘Sachita for ever ❤️ </div>
      {
        networks.map((network) => {
          return (
            <Group gap='xs' key={network.name}>
              <SocialIcon network={network.name} url={network.url} target='_blank'/><a className='hidden lg:block' target='_blank' href={network.url}>{network.name.toUpperCase()}</a>
            </Group>
              )
        })
      }
      <div>© CUMBIA PARA TODXS 2025</div>
      </Group>
    </div>
  )
}

export default Footer