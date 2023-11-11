import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
// components

export default function ChatBotFooter({ desabilitado, href }) {
    return (
        <footer className="flex items-center h-16 w-full max-w-sm md:max-w-2xl bg-[#f5f5f5] fixed bottom-0 pr-4 justify-end">
            <label
                htmlFor="avançar"
                className={`${desabilitado && "hidden"} mr-2`}
            >
                Avançar para próxima etapa
            </label>
            <Link
                href={desabilitado ? "#" : href}
                className={`bg-blue-600 p-2 rounded-lg ${
                    desabilitado && "bg-zinc-200"
                }`}
            >
                <AiOutlineArrowRight
                    id="avançar"
                    className={`w-6 h-6 text-white ${
                        desabilitado && "text-zinc-400"
                    }`}
                />
            </Link>
        </footer>
    );
}
