import Image from 'next/image';
import { AiFillCamera, AiOutlineCloudUpload } from 'react-icons/ai';

export default function CampoInserirImg({ titulo }) {
    return (
        <>
            <label className="">{titulo}</label>
            <div className="flex items-center flex-col border-2 border-zinc-300">
                <div className=''>
                    <Image />
                </div>
                <div className='flex gap-5'>
                    <AiFillCamera className="aspect-aut w-10 h-10" />
                    <AiOutlineCloudUpload className="aspect-aut w-10 h-10" />
                </div>
            </div>
        </>
    );
}
