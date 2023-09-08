import Botao from "@/app/Componentes/Botao";
import Header from "@/app/Componentes/Header";
import Link from "next/link";


export default function Home() {
    return (
        <>
            <Header/>
            <main className="flex flex-col items-center space-y-16 min-h-[90vh] justify-center">
                <h1 className="font-bold text-4xl text-center">Vistoria <br/> Concluida!</h1>
                <p className="max-w-[200px] font-semibold text-center">Parabéns, você foi aprovado no processo de vistoria!</p>
                <Link href="/">
                    <Botao texto="Menu Principal"/>
                </Link>
            </main>
        </>
    )
}
