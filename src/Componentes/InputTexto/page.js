import {BiSolidSend} from 'react-icons/bi'

export default function InputTexto(){
    return(
        <footer className="flex items-center p-3 w-full gap-4 h-fit bg-zinc-400 fixed bottom-0">
            <input className="flex-1 bg-transparent outline-none pb-1 placeholder:text-black border-b-2 border-black" 
                type="text" placeholder="Digite aqui" />
            <BiSolidSend className="w-6 h-6"/>
        </footer>
    )
}
