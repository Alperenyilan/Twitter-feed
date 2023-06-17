import React from 'react';
import Divider from '../components/Divider';
import TweetBox from "../components/TweetBox";
const Content = () => {
  return (
    <main className="flex-1 lex flex-col border-r border-l border-x-gray-extraLight">
      <header className=' sticky top-0 z-10 flex-1 justify-between items-center p-4 border-b border-x-gray-extraLight bg-white'>
        <span className='font-bold text-xl text-gray-900'>Home</span>
      </header>
      <div className='flex space-x-4 px-4 py-3'>
      <img src="https://pbs.twimg.com/profile_images/1563979790604029955/TEVubV9D_400x400.jpg" alt="Profile" className="w-11 h-11 rounded-full"/>
       <TweetBox />
      </div>
      <Divider />
    </main>
  )
}

export default Content