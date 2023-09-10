export default function Botao ({texto}) {
    return(
        <button className="hover:bg-blue-700 bi bg-blue-500 py-3 px-4 rounded-lg text-white font-bold text-lg">
            {texto}
        </button>
    )
}