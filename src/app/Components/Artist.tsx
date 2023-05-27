import Image from "next/image"

export default function Artist() {
    return(
        <div className="w-28 h-20 m-0 rounded-lg shadow-lg flex flex-col justify-center items-center">
        <Image src="https://i.scdn.co/image/ab6761610000e5ebd42a27db3286b58553da8858" className="w-full h-40 object-cover rounded-full" alt="artist" />  
        <p className="text-lg text-center mt-3">Artist</p>
      </div>
    )
}