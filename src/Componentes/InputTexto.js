import Link from 'next/link'
import {BiSolidSend} from 'react-icons/bi'

export default function InputTexto(){
    return(
        <footer className="py-4 px-8 w-full h-16 bg-zinc-400 fixed bottom-0">
            <div className='flex max-w-2xl gap-4 justify-center mx-auto items-center'>
                <input className="flex-1 bg-transparent outline-none pb-1 placeholder:text-black border-black border-b-2" 
                    type="text" placeholder="Digite aqui" />
                <Link href='/chatBot/envioFotos'>
                    <BiSolidSend className="w-6 h-6"/>
                </Link>
            </div>
        </footer>
    )
}
