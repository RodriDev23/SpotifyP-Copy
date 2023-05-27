import React, { useState } from "react";
import {MdNavigateNext, MdNavigateBefore} from 'react-icons/md'
import Image from "next/image";

interface SliderItem {
  id: number;
  songCover: string;
  songTitle: string;
  artist: string;
  albumPic: string;
  spotifyLink: string;
}

const PlaylistP: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderItems: SliderItem[] = [
    {
      id: 1,
      songCover: "https://i.scdn.co/image/ab6775700000ee8570dd928d108eab4eba7caf3b",
      songTitle: "PORFA (Remix)",
      artist: "Feid",
      albumPic: "https://images.genius.com/fd4bd0cdf2fd7099e80aea3451db4a34.1000x1000x1.jpg",
      spotifyLink: "#"
    },
    {
      id: 2,
      songCover: "https://i.scdn.co/image/ab6775700000ee8570dd928d108eab4eba7caf3b",
      songTitle: "JAMAICAN STYLE",
      artist: "Mike Towers",
      albumPic: "https://images.genius.com/6bc04ed7063cb53620a8d9f023697e1a.1000x1000x1.png",
      spotifyLink: "#"
    },
   
    {
      id: 3,
      songCover: "https://i.scdn.co/image/ab6775700000ee8570dd928d108eab4eba7caf3b",
      songTitle: "Sigueme - Remix",
      artist: "Feid, Sech",
      albumPic: "https://i.scdn.co/image/ab67616d0000b2732e7f404c4261c0ab9f62fc01",
      spotifyLink: "#"
    },
    {
      id: 4,
      songCover: "https://i.scdn.co/image/ab6775700000ee8570dd928d108eab4eba7caf3b",
      songTitle: "Porque Me Tratas Asi",
      artist: "Winsin & Yandel",
      albumPic: "https://i.scdn.co/image/ab67616d0000b2735374e0160ead917b6e73b61f",
      spotifyLink: "#"
    },
    
    // Add more slider items as needed
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1));
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center mt-4">
        <div className="flex items-center bg-black border border-green-500 text-green-500 rounded-md p-4 w-[90%] md:w-[50%] lg:w-[30%] mt-5">
          <div>
            <Image src={sliderItems[currentIndex].songCover} alt="song cover" className="w-16 h-16 rounded-full object-cover mb-48" />
          </div>
          <div className="flex flex-col flex-grow">
            <div className="flex items-start justify-between">
              <button className="prev-button" onClick={handlePrev}>
                <MdNavigateBefore className="w-6 h-6 mt-20 mr-2" />
              </button>
             
              <div className="flex flex-col">
              <h4 className="text-2xl font-semibold text-green-500 mb-2">I love this Playlist!</h4>
                <p className="text-green-500 mb-2 max-w-[10rem] text-center">{sliderItems[currentIndex].songTitle}</p>
                <p className="text-green-500 mb-2 max-w-[10rem] text-center">
                  by <span className="text-green-500">@ {sliderItems[currentIndex].artist}</span>
                </p>
              </div>
              <button className="next-button" onClick={handleNext}>
                <MdNavigateNext className="w-6 h-6 mt-20 " />
              </button>
            </div>
            <div className="flex items-center">
              <Image src={sliderItems[currentIndex].albumPic} alt="album pic" className="h-28 w-28 object-cover mr-3 max-w-[10rem]  ml-16" />
            </div>
            <a href={sliderItems[currentIndex].spotifyLink} className="bg-green-400 text-black font-bold py-1 px-3 rounded hover:bg-green-600 mt-3 max-w-sm w-[70%] flex justify-center items-center ml-6">
          Listen on Spotify
        </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistP;
