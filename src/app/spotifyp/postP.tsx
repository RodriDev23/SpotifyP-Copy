export default function PublicationP() {
    return(
<div className="w-full">
  <div className="flex items-center justify-center mt-4">
    <div className="flex items-center bg-black border border-green-500 text-green-500 rounded-md p-4 w-[90%] md:w-[50%] lg:w-[30%] mt-5">
      <div className="mr-4">
        <img src="https://i.scdn.co/image/ab6775700000ee8570dd928d108eab4eba7caf3b" alt="song cover" className="w-16 h-16   mb-48 rounded-full object-cover" />
      </div>
      <div>
        <h4 className="text-lg font-bold text-green-500">I love this song!</h4>
        <div className="flex flex-col justify-between items-center ml-12 mt-2">
          <p className="text-green-500">"Song Title" by <span className="text-green-500">@artist</span></p>
          <div className="flex flex-col items-center mt-2">
            <img src="https://images.genius.com/fd4bd0cdf2fd7099e80aea3451db4a34.1000x1000x1.jpg" alt="albumpic" className="h-28 w-28 object-cover mt-3 mb-3" />
            <a href="#" className="bg-green-400 text-black font-bold py-1 px-3 rounded hover:bg-green-600 mt-3">Listen on Spotify</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      


    )
}