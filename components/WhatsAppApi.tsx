import React from 'react'
import { FaWhatsapp } from "react-icons/fa"
import { SocialIcon } from 'react-social-icons'

const WhatsAppApi = () => {
  return (
    <div className='flex rounded-full bg-green-400 items-center fixed lg:top-4 top-20 lg:right-10 right-4 '>
        <a href='https://wa.me/34634017750' className='p-2 text-white lg:text-xl hidden lg:flex'>Envianos un Whatsapp!</a>
        <SocialIcon network='whatsapp' url='https://wa.me/34634017750' />
    </div>
  )
}

export default WhatsAppApi