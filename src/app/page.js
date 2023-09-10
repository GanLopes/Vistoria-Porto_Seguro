import NavBar from '@/Componentes/BotaoHeader';
import Link from 'next/link';
import Botao from '../Componentes/Botao';

export default function Home() {
    return (
        <>
            <main className="flex flex-col items-center space-y-16 min-h-[80vh] justify-center">
                <h1 className="font-bold text-4xl">Bem-Vindo</h1>
                <p className="max-w-[200px] font-semibold text-center">
                    Clique em avançar para darmos inicio ao processo de vistoria
                </p>
                <Link href="/chatBot">
                    <Botao texto="Avançar" />
                </Link>
            </main>
        </>
    );
}
