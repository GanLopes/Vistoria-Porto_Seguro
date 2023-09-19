'use client';
import Resposta from '@/componentes/Resposta';
import CaixaMensagem from './CaixaMensagens';

export default function Mensagem({ mensagem, envio, respostas }) {
    return (
        <div
            className={`flex ${
                envio === 'cliente' ? 'justify-end' : 'justify-start'
            }`}
        >
            <div className="flex flex-col items-center">
                <CaixaMensagem envio={envio} mensagem={mensagem} />
                <div className="flex gap-4 justify-center flex-wrap w-full max-w-[250px] mx-auto">
                    {respostas &&
                        respostas.map((resposta, index) => {
                            return(
                            <Resposta
                                key={index}
                                resposta={resposta}
                            />
                        )})}
                </div>
            </div>
        </div>
    );
}
