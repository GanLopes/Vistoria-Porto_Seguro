import Link from 'next/link'
import {BiSolidSend} from 'react-icons/bi'

export default function InputTexto(){
    return(
        <footer className="flex items-center pt-3 pb-5 px-8 w-full gap-4 h-16 bg-zinc-400 fixed bottom-0">
            <input className="flex-1 bg-transparent outline-none pb-1 placeholder:text-black border-b-2 border-black" 
                type="text" placeholder="Digite aqui" />
            <a href='/About'>
                <BiSolidSend className="w-6 h-6"/>
            </a>
        </footer>
    )
}
