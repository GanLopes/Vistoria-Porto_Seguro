import Header from '@/Componentes/Header';
import CaixaMensagem from '../../Componentes/CaixaMensagem';
import InputTexto from '../../Componentes/InputTexto';

export default function chatBot() {
    return (
        <div>
            <Header/>
            <main className="mb-20 max-w-2xl mt-10 mx-auto">
                <CaixaMensagem
                    envio="bot"
                    mensagem={
                        'Olá, sou o ChatBot e vou ajudar você com a vistoria. Podemos começar?'
                    }
                />
                <CaixaMensagem envio="user" mensagem={'Sim'} />
                <CaixaMensagem
                    envio="bot"
                    mensagem={
                        'Tudo Bem, antes de começarmos você possue alguma duvida'
                    }
                />
                <CaixaMensagem envio="user" mensagem={'Não'} />
                <CaixaMensagem
                    envio="bot"
                    mensagem={'Tudo Bem, vamos começar'}
                />
                <CaixaMensagem envio="user" mensagem={'Sim'} />
            </main>
            <InputTexto />
        </div>
    );
}
