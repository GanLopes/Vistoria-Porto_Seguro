const Resposta = ({ resposta }) => {
    return (
        <div
            className={`rounded py-1 px-2 text-lg 
            cursor-pointer hover:bg-zinc-400/70 focus:bg-zinc-400/70 bg-zinc-300`}
        >
            {resposta}
        </div>
    );
};

export default Resposta;
