import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import SendMessage from "./SendMessage";
import { db } from "@/firebase";

const Chat = () => {
    const scroll=useRef();

    const [messages,setMessages]=useState([]);

    
    // to rendering the realtime data from the firebase
    useEffect(()=>{
        const q= query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q,(querySnapshot)=>{
            let messages =[]
            querySnapshot.forEach((doc)=>{
                messages.push({...doc.data(), id: doc.id})
            })
            setMessages(messages)
        })
        return ()=>unsubscribe()
    },[])

  return (
    <div className="mt-12 mb-44">
      <div className="flex flex-col p-[10px] relative">
        {/* chat message component */}
        {messages && messages.map((message)=>(
            <Message key={message.id} message={message}/>
        ))}
      </div>
      {/* send message component */}
      <SendMessage />
      <span ref={scroll}></span>
    </div>
  );
};

export default Chat;
