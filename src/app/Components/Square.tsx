import Image from "next/image";

interface SquareProps {
  img: string;
}

const Square: React.FC<SquareProps> = (props) => {
  const { img } = props;

  return (
    <div className="w-28 h-20 rounded-lg shadow-lg flex flex-col justify-center items-center">
      <Image src={`/imgs/${img}.png`} alt="Playlist Image" className="w-full h-40 object-cover rounded-t-lg" height={200} width={200} />
      <p className="text-lg text-center mt-3">Playlist Title</p>
    </div>
  );
};

export default Square;
