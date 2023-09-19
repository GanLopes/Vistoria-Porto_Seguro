import Link from 'next/link';
import Botao from '/src/componentes/Botao';

export default function Home() {
    return (
        <>
            <main className="flex flex-col items-center space-y-10 min-h-[80vh] justify-center">
                <h1 className="font-extrabold text-6xl">
                    Bem-Vindo
                </h1>
                <p className="max-w-[200px] text-xl font-base text-center">
                    Clique em avançar para que possamos começar
                </p>
                <Link href="/chat-bot">
                    <Botao texto="Avançar" />
                </Link>
            </main>
        </>
    );
}
