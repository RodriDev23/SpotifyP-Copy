'use client'
import React, { useState } from 'react';
import MiniPlayer from './MiniPlayer';


export default function FriendOnline() {
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);

  return (
    <div className="w-28 h-20 m-0 rounded-lg shadow-lg flex flex-col justify-center items-center">
      <img
        src="https://i.scdn.co/image/ab6775700000ee8570dd928d108eab4eba7caf3b"
        className="w-full h-40 object-cover rounded-full border border-green-500 cursor-pointer"
        onClick={() => setShowMiniPlayer(true)}
      />
      <p className="text-lg text-center mt-3">User</p>

      {showMiniPlayer && (
        <MiniPlayer
          imageUrl="https://i.scdn.co/image/ab6775700000ee8570dd928d108eab4eba7caf3b"
          songDuration="3:30"
          setShowMiniPlayer={setShowMiniPlayer}
        />
      )}
    </div>
  );
}