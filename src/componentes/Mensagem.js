"use client";

export default function Mensagem({ mensagem, remetente, respostas }) {
    return (
        <div
            className={`flex ${
                remetente === "bot" ? "items-start" : "items-end"
            } space-y-3 flex-col`}
        >
            <CaixaMensagem remetente={remetente} mensagem={mensagem} />
            <div className="flex gap-1 flex-wrap w-full max-w-[240px]">
                {respostas &&
                    respostas.map((resposta, index) => (
                        <Resposta
                            key={index}
                            resposta={resposta}
                            remetente={remetente}
                        />
                    ))}
            </div>
        </div>
    );
}

const Resposta = ({ resposta, remetente }) => {
    return (
        <div
            className={`rounded py-1 px-2 text-lg 
            cursor-pointer active:scale-95 ${
                remetente === "cliente"
                    ? "bg-zinc-700 hover:bg-zinc-500 focus:bg-sky-500"
                    : "hover:bg-sky-500 focus:bg-sky-500 bg-sky-700"
            }  text-white`}
        >
            {resposta}
        </div>
    );
};

const CaixaMensagem = ({ remetente, mensagem }) => {
    return (
        <div
            className={`max-w-xs text-xl rounded-md text-white 
                py-1 px-3 break-words
             ${
                 remetente === "cliente"
                     ? `rounded-ee-none bg-zinc-400 text-end text-black`
                     : "rounded-ss-none bg-blue-600 text-rigth"
             }`}
        >
            {mensagem}
        </div>
    );
};
