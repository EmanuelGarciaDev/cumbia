import { Box, Container } from '@mantine/core';
import React from 'react';

const VideoHero = () => {
    return (
        <div className='relative w-full lg:h-screen h-[50vh]'>
            <video 
                src='cptVideo.mp4' 
                className='absolute object-cover -z-10 w-full h-full'
                autoPlay 
                loop 
                muted
            />
            <div className='absolute inset-0 bg-black opacity-50 -z-10' />
            <div className='w-full h-full z-20 flex flex-col items-center font-[Dela-Gothic-One] text-white font-semibold pt-10'>
                <h1 className='lg:text-[90px]'>CUMBIA</h1>
                <h2 className='lg:text-[85px]'>PARA TODXS</h2>
            </div>
        </div>
    );
}

export default VideoHero;