import React from 'react'
import { FaWhatsapp } from "react-icons/fa"
import { SocialIcon } from 'react-social-icons'

const WhatsAppApi = () => {
  return (
    <div className='flex rounded-full bg-green-400 items-center absolute bottom-20 right-20 '>
        <a href='https://wa.me/34634017750' className='p-2 text-white	'>Envianos un Whatsapp!</a>
        <SocialIcon network='whatsapp' url='https://wa.me/34634017750' />
    </div>
  )
}

export default WhatsAppApi