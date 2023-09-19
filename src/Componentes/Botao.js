export default function Botao ({texto}) {
    return(
        <button className="hover:bg-blue-700 bg-blue-500 py-3 px-4 rounded-lg text-white font-medium text-lg">
            {texto}
        </button>
    )
}