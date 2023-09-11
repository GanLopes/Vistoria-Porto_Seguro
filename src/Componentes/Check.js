import {FaCheck} from 'react-icons/fa6'

export default function Check(){
    return(
        <div className="flex items-center flex-col rounded-2xl mt-[1.5rem] border-zinc-400 border-2 pt-[2rem] pb-[2rem] w-[15rem]">
            <label className="flex items-center gap-5 border-2 border-zinc-400 cursor-pointer active:shadow-md  hover:shadow-md transition-shadow duration-100 p-3 rounded-xl mt-5">
                <FaCheck className="aspect-aut w-12 h-12"/>
            </label>
        </div>
    )
}