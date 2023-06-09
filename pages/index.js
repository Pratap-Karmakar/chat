import Head from 'next/head'
import { Inter } from 'next/font/google'
import { signOut, useSession } from 'next-auth/react'
import Login from '@/components/Login';
import Navbar from '@/components/Navbar';
import Chat from '@/components/Chat';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const{data:session}=useSession();
  if(!session) return <Login/>
  return (
    <>
      <Head>
        <title>SharkChat</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={()=>signOut('google')} className='bg-white '>sign out</button>
      <main>
        <Navbar/>
        <Chat/>
      </main>
    </>
  )
}
