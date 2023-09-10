import Botao from '@/Componentes/Botao';
import CampoInserirImg from '@/Componentes/CampoInserirImg';
import Link from 'next/link';

const titulosCampos = ['FRENTE', 'LADO ESQUERDO', 'LADO DIREITO', 'ATRÁS'];

export default function EnvioFotos() {
    return (
        <>
            <h1 className="text-center text-3xl mt-10 font-semibold ">
                Fotografe a sua Bike
            </h1>
            <main className="flex flex-wrap mx-auto justify-center max-w-xl gap-2 w-[100vw] h-[100%]">
                {titulosCampos.map(titulo => (
                    <CampoInserirImg key={titulo} titulo={titulo} />
                ))}
            </main>
            <div className="flex justify-center">
                <Link href={'/chatBot/envioFotos/vistoriaConcluida'}>
                    <Botao texto={'Avançar'} />
                </Link>
            </div>
        </>
    );
}
