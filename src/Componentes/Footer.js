import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import InputTexto from './InputTexto';

export default function Footer({ desabilitado, href, digitar=false, setIdMensagem=0}) {
    return (
        <footer className="flex items-center h-16 w-full bg-[#f5f5f5] fixed bottom-0">
            <div className="px-4 w-full max-w-2xl flex gap-4 mx-auto items-center justify-end">
                {digitar && <InputTexto setIdMensagem={setIdMensagem}/>}
                <label htmlFor="avançar" className={`${desabilitado && 'hidden'}`}>
                    Avançar para próxima etapa
                </label>
                <Link
                    href={desabilitado ? href[0] : href[1]}
                    className={`bg-blue-600 p-2 rounded-lg ${
                        desabilitado && 'bg-zinc-200'
                    }`}
                >
                    <AiOutlineArrowRight
                        id="avançar"
                        className={`w-6 h-6 text-white ${
                            desabilitado && 'text-zinc-400'
                        }`}
                    />
                </Link>
            </div>
        </footer>
    );
}
