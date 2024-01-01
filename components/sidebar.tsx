import React from 'react';
import analyticsImg from '../public/analytics-logo.png';
import Image from 'next/image';
import { userData } from '@/lib/data';


type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='w-[100vw] sm:w-[35vw] sm:h-[100vh] bg-[#24344b] sm:sticky sm:top-0'>
        <div className='h-full w-full  flex flex-col items-center justify-center p-6'>
            <Image className='w-40' src={analyticsImg}  alt="analytics-img"/>
            <h2 className='text-white text-lg'>{userData.name}</h2>
        </div>

    </div>
  )
}

export default Sidebar