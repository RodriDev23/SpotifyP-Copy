import {AiOutlineCamera} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import SquareGenre from './SquareGenre'






export default function FriendOnline() {
    return (
      <div className="flex flex-col justify-center items-center">
      <div className="flex justify-between items-center w-full mb-6">
        <h2 className="text-center text-2xl mt-5 ml-3">Search</h2>
        <AiOutlineCamera className="h-7 w-7 mr-5 flex justify-center items-center mt-4" />
      </div>
      <div className="flex flex-col items-center w-full mb-6">
        <div className="flex items-center justify-between w-[90%] px-3 py-3 bg-white rounded-lg shadow">
          <AiOutlineSearch className="mr-2 h-6 w-6 text-black" />
          <input type="text" placeholder="Artist, songs or podcast" className="flex-grow bg-transparent focus:outline-none" />
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <p className="text-white mb-4">Your Top genres</p>
        <div className="flex justify-center w-full gap-4 mb-6">
          <SquareGenre />
          <SquareGenre />
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <p className="text-white mb-4">Podcast</p>
        <div className="flex justify-center w-full mb-6 gap-5">
          <SquareGenre />
          <SquareGenre />
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <p className="text-white mb-4">Browse All</p>
        <div className="flex justify-center w-full mb-6 gap-5">
          <SquareGenre />
          <SquareGenre />
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <p className="text-white mb-4">All types</p>
        <div className="flex justify-center w-full mb-6 gap-5">
          <SquareGenre />
          <SquareGenre />
        </div>
      </div>
    </div>
    
    
      
    )
}