'use client'

import PublicationP from "./postP"
import PlaylistP from "./playlistP"
import ConcertsP from "./Concerts"
import Image from "next/image"


export default function spotifyp(){
    return(
      <div>
       <div className="flex justify-between items-center h-12 px-4 border-b-0 mt-10">
    <div className="flex items-center justify-center">
        <Image src="https://i.scdn.co/image/ab6775700000ee8570dd928d108eab4eba7caf3b" alt="user" className="w-20 h-20 object-cover rounded-full border border-green-500 cursor-pointer mr-4" />
    </div>
    <input type="text" placeholder="Share your music" className="w-4/5 h-20 rounded-md border-2 border-green-500 bg-black text-green-500 px-4" />
   </div>
   <div className="w-full">
  <div className="flex justify-center flex-col mt-10">
    <PublicationP />
    <PublicationP />
  </div>
  <div>
    <PlaylistP  />
    <PlaylistP  />
  </div>
  <div className="flex flex-col justify-center w-[50%]">
  <h2 className="text-left text-2xl font-bold flex justify-center items-center mt-5">Next Concerts:</h2>
  <ConcertsP />
  </div>

</div>

      </div>
    )
}