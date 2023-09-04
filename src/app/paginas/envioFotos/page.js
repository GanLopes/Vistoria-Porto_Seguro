import Botao from "@/app/Componentes/Botao/page"
import CampoInserirImg from "@/app/Componentes/CampoInserirImg/page"
import Headers from "@/app/Componentes/Header/page"
import Link from "next/link"


const titulosCampos = [
    'FRENTE',
    'LADO ESQUERDO',
    'LADO DIREITO',
    'ATRÁS',
] 

export default function Home() {
    return (
        <>
            <Link href={"/"}>
                <Headers/>
            </Link>
            <main className='flex flex-col items-center w-[100vw] h-[100%]'>
                {titulosCampos.map((titulo) => <CampoInserirImg key={titulo} titulo={titulo}/>)}
                <Botao nome={'Avançar'}/>
            </main>
        </>
    )
}
