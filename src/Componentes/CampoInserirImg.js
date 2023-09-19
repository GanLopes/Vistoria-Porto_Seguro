import Image from 'next/image';
import { AiOutlineCamera } from 'react-icons/ai';
import { MdOutlineInsertPhoto } from 'react-icons/md';

export default function CampoInserirImg({ titulo, img }) {
    return (
        <div
            className="flex p-4 bg-white flex-col w-72
             rounded-lg overflow-hidden border-2 hover:border-blue-600 border-zinc-200"
        >
            <label className="text-blue-700 font-semibold">{titulo}</label>
            <div className="w-ful hover:text-white h-32 border-2 overflow-hidden rounded-lg hover:shadow-lg grid place-items-center">
                <Image
                    src={img}
                    alt={`Bike ${titulo}`}
                    width={150}
                    height={0}
                    className="w-full aspect-video object-scale-down"
                />
                <span>Solte a imagem aqui</span>
            </div>
            <div className="flex gap-5 py-4 justify-center">
                <button className="hover:bg-zinc-200 flex flex-col items-center border-zinc-200 w-20 border-2 p-2 rounded-lg">
                    <AiOutlineCamera className="text-black aspect-auto w-10 h-10" />
                    Camera
                </button>
                <button className="hover:bg-zinc-200 flex flex-col items-center border-zinc-200 border-2 p-2 w-20 h-15 rounded-lg">
                    <MdOutlineInsertPhoto className="text-black w-full aspect-auto h-10" />
                    Galeria
                </button>
            </div>
        </div>
    );
}
