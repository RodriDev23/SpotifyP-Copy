import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsStopFill, BsFillPlayFill } from 'react-icons/bs';
import {CiVolumeHigh} from 'react-icons/ci';
import Image from 'next/image';

interface MiniPlayerProps {
  imageUrl: string;
  songDuration: string;
  setShowMiniPlayer: React.Dispatch<React.SetStateAction<boolean>>;
}

const MiniPlayer: React.FC<MiniPlayerProps> = ({ imageUrl, songDuration, setShowMiniPlayer }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const handlePlayStop = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  const handleClose = () => {
    setShowMiniPlayer(false);
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-opacity-75 bg-black">
      <div>
        <AiOutlineClose onClick={handleClose} className="h-6 w-6 text-white flex justify-center items-center mb-4" />
      </div>

      <div className="bg-black border border-green-600 text-white rounded-lg py-14 px-11 flex flex-col items-center justify-center">
        <Image src="https://i.scdn.co/image/ab67616d0000b2738e8753ff69b7efb6f8e146cd" alt="Song Cover" className="w-40 h-40" />
        <p className="mt-3">Artist: Feid</p>
        <p>Song : Porfa ft Justin Quiles</p>

        <p className="mt-3 mb-3">{songDuration}</p>
        <div className='flex gap-3 justify-center items-center'>
        <CiVolumeHigh className='h-5 w-5 text-green-400' />
        <input
        type="range"
        min="0"
        max="100"
        value={volume}
       onChange={handleVolumeChange}
       className="w-40 h-2 bg-transparent appearance-none focus:outline-none overflow-hidden"
       style={{
       background: `linear-gradient(to right, #1ED760 0%, #1ED760 ${volume}%,   #C4C4C4 ${volume}%, #C4C4C4 100%)`,
       boxShadow: '0px 0px 2px #1ED760',
       borderRadius: '9999px',
       cursor: 'pointer'
       }}
      />
       </div>

        <button className="mt-3" onClick={handlePlayStop}>
          {isPlaying ? (
            <BsStopFill className="h-7 w-7 text-green-400" />
          ) : (
            <BsFillPlayFill className="h-7 w-7 text-green-400" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MiniPlayer;