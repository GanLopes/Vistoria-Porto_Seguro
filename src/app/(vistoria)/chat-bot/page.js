'use client';

import Footer from '@/componentes/Footer';
import Mensagem from '@/componentes/Mensagem';
import { mensagens } from '@/exports';
import { useEffect, useState } from 'react';

export default function chatBot() {
    const [jsonMensagens, setJsonMensagens] = useState(mensagens);
    const [idMensagem, setIdMensagem] = useState(4);
    const [desabilitado, setDesabilitado] = useState(true);
    
    useEffect(() => {
        if(idMensagem >= jsonMensagens.length){
            setDesabilitado(false)
        }else{
            setDesabilitado(true)
        }
    }, [jsonMensagens, idMensagem])
    console.log(desabilitado, idMensagem, jsonMensagens.length)
    return (
        <>
            <main className="mb-20 max-w-2xl mt-10 mx-auto">
                {jsonMensagens.map((elemento, index) => {
                    if (index > idMensagem) {
                        return;
                    }

                    return (
                        <Mensagem
                            key={index}
                            idMensagem={setIdMensagem}
                            mensagem={elemento.mensagem}
                            envio={elemento.remetente}
                            respostas={elemento.respostas}
                        />
                    );
                })}
            </main>
            <Footer
                setIdMensagem={setIdMensagem}
                digitar={jsonMensagens[idMensagem]?.digitar ?? false}
                href={['/chat-bot', '/envio-fotos']}
                desabilitado={desabilitado}
            />
        </>
    );
}
