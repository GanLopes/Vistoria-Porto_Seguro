'use client';

import Link from 'next/link';
import { useState } from 'react';

import Botao from '@/componentes/Botao';
import CampoInserirImg from '@/componentes/CampoInserirImg';
import Footer from '@/componentes/Footer';
import { titulosCampos } from '@/exports';

export default function EnvioFotos() {
    const [desabled, setDesabled] = useState(true);

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-center text-3xl my-10 mx-auto font-semibold ">
                Envio de Fotos
            </h1>
            <div
                className="flex flex-wrap mx-auto items-center 
            flex-col md:flex-row justify-center gap-10"
            >
                {titulosCampos.map(elemento => (
                    <CampoInserirImg
                        key={elemento.titulo}
                        img={elemento.img}
                        titulo={elemento.titulo}
                    />
                ))}
            </div>
            <div className="flex justify-center">
                <Link
                    href={'/chatBot/envioFotos/vistoriaConcluida'}
                    className="mt-10"
                >
                    <Botao texto={'Avançar'} />
                </Link>
            </div>
            <Footer href="/vistoria-concluida" desabled={desabled} />
        </div>
    );
}
