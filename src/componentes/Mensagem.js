"use client";

export default function Mensagem({ content, author }) {
    return (
        <div
            className={`flex ${
                author === "bot" ? "items-start" : "items-end"
            } space-y-3 flex-col justify-end`}
        >
            <CaixaMensagem author={author} content={content} />
        </div>
    );
}

const CaixaMensagem = ({ author, content }) => {
    return (
        <div
            className={`max-w-xs text-xl rounded-md text-white 
                py-1 px-3 break-words
             ${
                 author === "user"
                     ? `rounded-ee-none bg-zinc-400 text-end text-black`
                     : "rounded-ss-none bg-blue-600 text-rigth"
             }`}
        >
            {content}
        </div>
    );
};
