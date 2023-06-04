import { db } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import {RiSendPlane2Fill} from 'react-icons/ri'

const SendMessage = () => {

    const{data:session}=useSession();

    const [input, setInput] = useState("");
    // console.log(input)

    const handleSendMessage = async (e) =>{
      e.preventDefault();

      // this if statement will do that empty massage can't be send if anyone wants to send an empty message then it throw an alert and return
      if(input === ''){
        alert ('Please enter a message!')
        return
      }
      // to send the different type of message to the different side of the screen
      // const {`{session.user.uid}`,}
      await addDoc(collection(db, 'messages'),{
        text:input,
        uid:session.user.uid,
        timestamp: serverTimestamp(),
      })
      // console.log(input)
      // to clean the input textarea clean after sending a message;
      setInput("")
    }

  return (
    <div className='pt-40'>
        <form onSubmit={handleSendMessage} className='fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 bg-black'>
            <input placeholder='Enter message here...' value={input} onChange={(e)=>setInput(e.target.value)} type="text" className='flex-1 rounded-xl border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600  px-5 py-3 '/>
            <button type='submit' className='bg-[#c4661f] hover:bg-[#8c4a1c] text-[#161515] font-bold py-2 px-4 rounded-md '>Send <RiSendPlane2Fill className='md:w-5 w-3 h-3 md:h-5 text-black mb-1 inline'/></button>
            
        </form>
    </div>
  )
}

export default SendMessage