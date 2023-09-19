import Botao from '@/componentes/Botao';
import CampoInserirImg from '@/componentes/CampoInserirImg';
import { titulosCampos } from '@/exports/exports';
import Link from 'next/link';

export default function EnvioFotos() {
    return (
        <>
            <h1 className="text-center text-3xl mt-10 font-semibold ">
                Envio de Fotos
            </h1>
            <main className="flex flex-wrap mx-auto justify-center max-w-xl gap-2 w-[100vw] h-[100%]">
                {titulosCampos.map(titulo => (
                    <CampoInserirImg key={titulo.img} titulo={titulo} />
                ))}
            </main>
            <div className="flex justify-center">
                <Link
                    href={'/chatBot/envioFotos/vistoriaConcluida'}
                    className="mt-10"
                >
                    <Botao texto={'Avançar'} />
                </Link>
            </div>
        </>
    );
}
