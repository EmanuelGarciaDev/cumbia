import React from 'react'

const VideoHero = () => {
    return (
        <div className='w-full h-screen'>
            <video 
                src='cptVideo.mp4' 
                className='absolute object-cover -z-10 w-full'
                autoPlay='{true}' loop muted
            />
            <div className='w-full h-full z-20 flex flex-col justify-center items-center font-[Dela-Gothic-One] text-white font-semibold'>
                <h1 className='text-[90px] '>CUMBIA</h1>
                <p className='text-[85px]'>PARA TODXS</p>
            </div>
        </div>
    )
}

export default VideoHero