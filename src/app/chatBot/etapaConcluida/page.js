import Botao from '@/Componentes/Botao';
import Check from '@/Componentes/Check';
import Header from '@/Componentes/Header';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Header/>
            <main className="flex flex-col items-center space-y-16 min-h-[90vh] justify-center">
                <h1 className="font-bold text-5xl text-center">
                    Etapa <br /> Concluida!
                </h1>
                <p className="max-w-[200px] text-xl font-semibold text-center">
                </p>
                <Link href="/chatBot/envioFotos">
                    <Botao texto="Avançar" />
                </Link>
            </main>
            <Check/>
        </div>
    );
}