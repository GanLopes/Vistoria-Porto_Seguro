"use client"

import InputTexto from '@/componentes/InputTexto';
import Mensagem from '@/componentes/Mensagem';
import { mensagens } from '@/exports/exports';
import { useState } from 'react';

export default function chatBot() {
    const [desabled, setDesabled] = useState(true)
    
    return (
        <>
            <main className="mb-20 max-w-2xl mt-10 mx-auto">
                {mensagens.map((elemento, index) => (
                    <Mensagem
                        key={index}
                        mensagem={elemento.mensagem}
                        envio={elemento.remetente}
                        respostas={elemento.respostas}
                    />
                ))}
            </main>
            <InputTexto desabled={desabled}/>
        </>
    );
}
