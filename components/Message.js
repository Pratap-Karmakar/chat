import { useSession } from 'next-auth/react'
import React from 'react'

const style ={
  send:`p-2 bg-yellow-400 text-black font-semibold rounded-tl-full rounded-bl-full rounded-tr-full inline-flex flex-row-reverse text-end float-right`,
  received:`p-2 bg-yellow-700 text-black font-semibold rounded-tl-full rounded-tr-full rounded-br-full inline-flex text-black float-left`
}

const Message = ({message}) => {
  const {data:session}=useSession();
  // console.log(message)
  console.log(session.user.uid)

  // to send the message to the left or right as per the user
  const messageClass= message.uid === session.user.uid ? `${style.send}` : `${style.received}`
  return (
    <div className='mt-4'>
        <div className={` ${messageClass}`}>
            {/* <p className='absolute mt-[-4rem]  text-xs text-black'>{session.user.name}</p> */}
            <p className=''>{message.text}</p>
        </div>
    </div>
  )
}

export default Message