'use client';

import Link from 'next/link';
import { useState } from 'react';

import CampoInserirImg from '/src/componentes/CampoInserirImg';
import Footer from '/src/componentes/Footer';
import { titulosCampos } from '/src/exports';

export default function EnvioFotos() {
    const [desabled, setDesabled] = useState(true);

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-center text-3xl my-10 mx-auto font-semibold ">
                Envio de Fotos
            </h1>
            <div
                className="mb-20 flex flex-wrap mx-auto items-center 
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
            <Footer href="/vistoria-concluida" desabled={desabled} />
        </div>
    );
}
