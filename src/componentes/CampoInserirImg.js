import Image from "next/image";
import { AiOutlineCamera } from "react-icons/ai";

export default function CampoInserirImg({ titulo, img }) {
    return (
        <div
            className="flex p-4 bg-white flex-col w-72
             rounded-lg overflow-hidden border-2 border-zinc-200"
        >
            <p className="text-blue-700 font-semibold">{titulo}</p>
            <div className="w-ful hover:text-white h-32 border-2 overflow-hidden rounded-lg grid place-items-center">
                <Image
                    src={img}
                    alt={`Bike ${titulo}`}
                    width={150}
                    height={0}
                    className="w-full aspect-video object-scale-down"
                />
            </div>
            <div className="flex gap-5 py-4 justify-center">
                <button className="hover:bg-zinc-200 flex flex-col items-center border-zinc-200 w-26 border-2 p-2 rounded-lg">
                    <AiOutlineCamera className="text-black aspect-auto w-10 h-10" />
                    Tirar foto
                </button>
            </div>
        </div>
    );
}
