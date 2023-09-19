import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function InputTexto({ desabled }) {
    return (
        <footer className="flex items-center h-16 w-full bg-[#f5f5f5] fixed bottom-0">
            <div className="px-4 w-full max-w-2xl flex gap-4 mx-auto items-center justify-end">
                <label htmlFor="avançar" className={`${desabled && 'hidden'}`}>
                    Avançar para próxima etapa
                </label>
                <Link
                    href={`${desabled ? '/chat-bot' : '/envio-fotos'}`}
                    className={`bg-blue-600 p-2 rounded-lg ${
                        desabled && 'bg-zinc-200'
                    }`}
                >
                    <AiOutlineArrowRight
                        id="avançar"
                        className={`w-6 h-6 text-white ${
                            desabled && 'text-zinc-400'
                        }`}
                    />
                </Link>
            </div>
        </footer>
    );
}
