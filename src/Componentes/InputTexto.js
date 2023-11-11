'use client';
import { useState } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';

import { mensagens } from '@/utils/mensagens';

function controlaMensagem(mensagem, setMensagem, setIdMensagem) {
    if (mensagem.length < 5 || mensagem.length > 10) {
        return;
    }

    mensagens.push(
        {
            mensagem: mensagem,
            remetente: 'cliente',
        },
        {
            mensagem:
                'Muito bem, a coleta de dados foi concluida, avance para a próxima etapa.',
            remetente: 'bot',
        }
    );
    setIdMensagem(ant => (ant += 3));
    setMensagem('');
}

const InputTexto = ({ setIdMensagem }) => {
    const [mensagem, setMensagem] = useState('');
    return (
        <div className="py-2 px-4 flex gap-4 items-center w-full">
            <input
                type="number"
                placeholder="Digite aqui"
                value={mensagem}
                className="border-b-2 w-full bg-transparent border-zinc-400 outline-none"
                onChange={e => {
                    setMensagem(e.target.value);
                }}
            />
            <button
                type="button"
                onClick={e =>
                    controlaMensagem(mensagem, setMensagem, setIdMensagem)
                }
            >
                <RiSendPlaneFill />
            </button>
        </div>
    );
};

export default InputTexto;
