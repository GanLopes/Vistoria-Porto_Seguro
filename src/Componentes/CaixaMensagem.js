export default function CaixaMensagem ({mensagem, envio}) {
    return (
        <div className={`flex ${envio === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`mx-4 my-4 max-w-[15rem]  rounded-md text-white font-normal p-2 
            ${envio === "user" ? `rounded-ee-none bg-zinc-400 text-end text-black` : 'rounded-ss-none bg-blue-600 text-rigth '}`}>
                {mensagem}
            </div>
        </div>
    )
}
