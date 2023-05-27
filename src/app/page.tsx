import Square from './Components/Square'
import Artist from './Components/Artist'
import FriendOnline from './Components/FriendsOnline'
import { IoMdNotificationsOutline,  } from 'react-icons/io'
import { BsClockHistory } from 'react-icons/bs'
import { HiCog6Tooth } from 'react-icons/hi2'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import {SlPeople} from 'react-icons/sl'
import Link from 'next/link'



export default function Home() {


  return (

 <main className="max-w-7xl flex min-h-screen flex-col items-start justify-between p-4 md:p-24">
  
  
  <div className="flex flex-col items-start justify-between gap-12 w-[80%] md:w-[60%] md:gap-14">
  <div className="flex items-start justify-center  md:gap-12">
    <div className="flex items-center justify-start">
      <h3 className="text-lg md:text-2xl font-bold    mr-40">Good Afternoon</h3>
    </div>
    <div className="flex items-center justify-end">
      <ul className="flex gap-4 md:gap-12 justify-end mr-6">
        <li>
          <IoMdNotificationsOutline className="text-lg md:text-2xl cursor-pointer w-5 h-5" />
        </li>
        <li>
          <BsClockHistory className="text-lg md:text-2xl cursor-pointer w-5 h-5" />
        </li>
        <li>
          <HiCog6Tooth className="text-lg md:text-2xl cursor-pointer w-5 h-5" />
        </li>
        <li>
          <Link href="/profile">
              <AiOutlineUser className="text-lg md:text-2xl cursor-pointer w-5 h-5" />
          </Link>
        </li>
      </ul>
    </div>
  </div>
</div>







<h2 className="text-lg md:text-xl font-bold mt-6 mb-8">Friends Online</h2>
    <div className="max-w-full h-24 rounded-lg shadow-lg flex justify-center items-center gap-3  mb-4">
      <FriendOnline />
      <FriendOnline />
      <FriendOnline />
      <FriendOnline />
    </div>


  <div className="flex flex-col items-start justify-around gap-3 w-full">
    <h2 className="text-lg md:text-xl font-bold mt-6 mb-6">Made for user</h2>
    <div className="max-w-full h-24 rounded-lg shadow-lg flex justify-center items-center gap-3 md:gap-5 cursor-pointer">
      <Square img="spotifyplaylist3" />
      <Square img="spotifyplaylist2" />
      <Square img="spotifyplaylist4" />
      <Artist />
    </div>

    <h2 className="text-lg md:text-xl font-bold mt-6 mb-6">Recently played</h2>
    <div className="max-w-full h-24 rounded-lg shadow-lg flex justify-center items-center gap-3 cursor-pointer">
      <Square img="spotifyplaylist1" />
      <Square img="spotifyplaylist2" />
      <Square img="spotifyplaylist3" />
      <Artist />
    </div>

    <h2 className="text-lg md:text-xl font-bold mt-6 mb-6">Your Top Artist</h2>
    <div className="max-w-full h-24 rounded-lg shadow-lg flex justify-center items-center gap-3">
      <Square img="spotifyplaylist2" />
      <Square img="spotifyplaylist7" />
      <Square img="spotifyplaylist2" />
      <Artist />
    </div>
    <h2 className="text-lg md:text-xl font-bold mt-6 mb-6">Your Top Artist</h2>
    <div className="max-w-full h-24 rounded-lg shadow-lg flex justify-center items-center gap-3">
      <Square img="spotifyplaylist2" />
      <Square img="spotifyplaylist7" />
      <Square img="spotifyplaylist2" />
      <Artist />
    </div>
    <h2 className="text-lg md:text-xl font-bold mt-6 mb-6">Your Top Artist</h2>
    <div className="max-w-full h-24 rounded-lg shadow-lg flex justify-center items-center gap-3">
      <Square img="spotifyplaylist2" />
      <Square img="spotifyplaylist7" />
      <Square img="spotifyplaylist2" />
      <Artist />
    </div>
    <h2 className="text-lg md:text-xl font-bold mt-6 mb-6">Your Top Artist</h2>
    <div className="max-w-full h-24 rounded-lg shadow-lg flex justify-center items-center gap-3">
      <Square img="spotifyplaylist2" />
      <Square img="spotifyplaylist7" />
      <Square img="spotifyplaylist2" />
      <Artist />
    </div>


  </div>
   






</main>
  

   
  )
}
