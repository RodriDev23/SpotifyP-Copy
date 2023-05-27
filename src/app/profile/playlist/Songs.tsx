export default function Songs(){
    return(
        <div className="flex items-center p-4 bg-black text-green-400 rounded-lg shadow-md">
        <img src="https://i.discogs.com/DwW99lC85F0hbbCn93SPH0nzn4G6DQMkW984eSwRGhQ/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0ODA1/MTgtMTQ3MDk3NzE4/Ni05MzE4LmpwZWc.jpeg" alt="Album Cover" className="w-16 h-16 rounded-md" />
        <div className="ml-4">
          <h2 className="text-lg font-medium">Song Title</h2>
          <p className="text-gray-500">Album Name</p>
        </div>
      </div>
    )
}