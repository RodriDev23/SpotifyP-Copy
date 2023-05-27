import {AiOutlineDownload} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsFillPlayFill} from 'react-icons/bs' 
import {BiArrowBack} from 'react-icons/bi'
import Songs from './Songs'
import Link from 'next/link'
import Image from 'next/image'


export default function Playlist() {
  return(
<div className="bg-gradient-to-b from-blue-500 to-black rounded-lg shadow-lg p-6">
  <Link href='/profile'>
  <div className='flexitems-center justify-start mb-6'>
  <BiArrowBack className='h-5 w-5'/>
  </div>
  </Link> 
  <div className="flex items-center justify-center mb-6">
    <Image src="https://media.tenor.com/zw-Y19CGWtkAAAAM/snoopy-music.gif" alt="Playlist Image" className="w-60 h-60 mt-10" />
  </div>
  <p className='font-bold text-2xl mb-4'>Name of the playlist</p>
  <p className="text-white mb-4">Description of the playlist</p>
  <div className="flex items-center mb-4">
    <Image src="https://i.scdn.co/image/ab6775700000ee8570dd928d108eab4eba7caf3b" alt="User Image" className="w-8 h-8 rounded-full" />
    <h3 className="text-lg font-semibold ml-2">User Name</h3>
  </div>
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-5">
      <AiOutlineDownload className="w-7 h-7" />
      <AiOutlineHeart className="w-7 h-7" />
    </div>
    <div className="flex items-center">
      <button className="bg-green-500 text-white py-8 px-8 rounded-full flex items-center justify-end">
        <BsFillPlayFill className="h-8 w-8 text-black" />
      </button>
    </div>
  </div>
  <div className='flex flex-col  gap-5'>
  <Songs />
  <Songs />
  <Songs />
  <Songs />
  <Songs />
  <Songs />
  </div>
</div>

  

  )
}