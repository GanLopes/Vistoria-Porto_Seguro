import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
// components

export default function ChatBotFooter({ desabilitado, href }) {
    return (
        <section className="flex items-center h-16 w-full max-w-sm md:max-w-2xl bg-[#f5f5f5] fixed bottom-0 pr-4 justify-end">
            {msg.length < 6 ? (
                <div className="flex justify-between w-full items-center gap-x-2">
                    <input
                        className="flex-grow p-2 rounded-sm border-2 border-sky-700 outline-none"
                        type="text"
                        value={content}
                        onChange={(event) =>
                            setContent(() => event.target.value)
                        }
                        placeholder="Digite a sua resposta"
                    />
                    <button
                        className="bg-blue-600 p-2 rounded-lg"
                        onClick={() => {
                            messageCenter();
                            setContent("");
                        }}
                    >
                        <IoIosSend className="w-6 h-6 text-white" />
                    </button>
                </div>
            ) : (
                <div className="flex items-center">
                    <label htmlFor="avançar" className={`mr-2`}>
                        Avançar para próxima etapa
                    </label>
                    <Link
                        href={"envio-fotos"}
                        className={`bg-blue-600 p-2 rounded-lg
                            `}
                    >
                        <AiOutlineArrowRight
                            id="avançar"
                            className={`w-6 h-6 text-white`}
                        />
                    </Link>
                </div>
            )}
        </section>
    );
}
