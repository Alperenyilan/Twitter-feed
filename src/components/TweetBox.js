import React, {useState} from 'react';
import { EmojiIcon, GIFIcon, ImageIcon, PollIcon, SchuduleIcon } from '../icons/icon';
import db from "firebase"
import firebase from "firebase";


const TweetBox = () => {
    const [content, setContent] = useState("")
    
    const sendTweet = () => {
        if(content !== '') {
            db.collection('feed').add({
                displayName: "Alperen Yilan",
                username: "@Alperenyilan1",
                content,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                avatar: "https://pbs.twimg.com/profile_images/1563979790604029955/TEVubV9D_400x400.jpg"

            });
            setContent('')
        }

    }
  return (
    <div className='flex flex-col flex-1 mt-2 px-2'>
    <textarea className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent" 
    placeholder="What's happening?"
    onChange={(e) => setContent(e.target.value)}
    value={content}
    />
    <div className='flex items-center justify-between'>
        <div className='flex -ml-3'>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
            <ImageIcon className="w-6 h-6 text-primary-base" />
            </div>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
            <GIFIcon className="w-6 h-6 text-primary-base" />
            </div>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
            <PollIcon className="w-6 h-6 text-primary-base" />
            </div>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
            <EmojiIcon className="w-6 h-6 text-primary-base" />
            </div>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
            <SchuduleIcon className="w-6 h-6 text-primary-base" />
            </div>
        </div>
        <button className='bg-primary-base rounded-full px-4 py-2 font-medium  text-white'
        onClick={sendTweet}>
        Tweetle
        </button>
    </div>
    </div>
  )
}

export default TweetBox