const CaixaMensagem = ({envio, mensagem}) => {
    return (
        <div
            className={`mx-4 my-4 max-w-[15rem] text-xl rounded-md text-white font-normal p-2 
            ${
        envio === 'cliente'
            ? `rounded-ee-none bg-zinc-400 text-end text-black`
            : 'rounded-ss-none bg-blue-600 text-rigth '
        }`}
        >
            {mensagem}
        </div>
    );
};

export default CaixaMensagem;
