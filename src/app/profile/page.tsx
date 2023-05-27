import Link from "next/link"
import { BiArrowBack } from "react-icons/bi"
import Image from "next/image"



export default function profile() {
    return (
        <div className="p-6 space-y-6 bg-gradient-to-b from-blue-500 to-black text-white">
   <Link href='/'>
  <div className='flexitems-center justify-start mb-6'>
  <BiArrowBack className='h-5 w-5'/>
  </div>
  </Link>        
       
   <div className="flex flex-col justify-between items-center">
      <div className="flex items-center justify-center">
    <Image alt="friendsOnline2" src="https://i.scdn.co/image/ab6775700000ee8570dd928d108eab4eba7caf3b" width={200} height={50}
    className="w-40 h-40 object-cover rounded-full mt-20 absolute" /> 
    <Image alt="FriendsOnline2" src="https://wallpaperaccess.com/full/5276.jpg" className="mb-36 px-[-20] w-full h-full object-cover rounded-lg" height={50} width={400}  /> 
  </div>
  <div>
    <p className="font-bold text-2xl mb-3">UserName</p>
  </div>
  
</div>

        <div className="flex justify-center items-center mr-2">
        <button className="w-40 h-12 flex  justify-center items-center  bg-black text-white py-2 px-4 rounded-full text-center">Edit Profile</button>
        </div>
        <div className="text-center flex justify-between items-center mb-10 ">
          <div className="flex flex-col">
            <span className="text-1xl font-bold">4</span>
            <span className="text-gray-200"> Playlists</span>
          </div>
          <div className="flex flex-col">
            <span className="text-1xl font-bold">10</span>
            <span className="text-gray-200">Followers</span>
          </div>
          <div className="flex flex-col">
            <span className="text-1xl font-bold">4</span>
            <span className="text-gray-200">Following</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-7">Playlists</h2>
        <div className="space-y-4">
        
         <Link href="/profile/playlist">
          <div className="flex items-center">
            <Image src="https://media.tenor.com/zw-Y19CGWtkAAAAM/snoopy-music.gif" alt="Playlist" className="w-12 h-12 rounded cursor-pointer" height={40} width={100} />
            <div className="flex flex-col ml-4">
              <span className="text-lg font-bold cursor-pointer">Just Me</span>
              <span className="text-gray-200 cursor-pointer">10 tracks</span>
            </div>
          </div>
          </Link>
          
          <div className="flex items-center ">
            <Image src="https://i.pinimg.com/originals/79/cf/84/79cf8479dbc0077086e60a02d85f570c.jpg" alt="Playlist" className="w-12 h-12 rounded cursor-pointer" height={50} width={100}/>
            <div className="flex flex-col ml-4">
              <span className="text-lg font-bold cursor-pointer">Feelings</span>
              <span className="text-gray-200">8 tracks</span>
            </div>
          </div>
          <div className="flex items-center">
            <Image src="https://gifdb.com/images/thumbnail/will-smith-party-dance-y19ckfrv75lsw6is.gif" alt="Playlist" className="w-12 h-12 rounded cursor-pointer" height={30} width={100} />
            <div className="flex flex-col ml-4">
              <span className="text-lg font-bold cursor-pointer">Party Time</span>
              <span className="text-gray-200 cursor-pointer">12 tracks</span>
            </div>
          </div>
        </div>
        <div className="text-left mt-2">
          <h2 className="text-1xl font-bold cursor-pointer">See all 4 Playlists...</h2>
        </div>
      </div>
      
      

    )
}