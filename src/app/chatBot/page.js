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
                        'Vamos iniciar com algumas perguntas sobre a sua bicicleta'
                    }
                />
                <CaixaMensagem envio="user" mensagem={'Ok'} /> 
                <CaixaMensagem envio="user" mensagem={'Cancelar'} />
                <CaixaMensagem
                    envio="bot"
                    mensagem={
                        'Qual o Modelo da sua bike?'
                    }
                />
                <CaixaMensagem envio="user" mensagem={'Pinarello'} />
                <CaixaMensagem envio="user" mensagem={'BMC'} />
                <CaixaMensagem envio="user" mensagem={'Caloi'} />
                <CaixaMensagem envio="user" mensagem={'Outra'} />
                <CaixaMensagem
                    envio="bot"
                    mensagem={'Qual o número de serie da bicicleta '}
                />
                <CaixaMensagem envio="user" mensagem={'AB12345673'} />

                <CaixaMensagem
                    envio="bot"
                    mensagem={
                        'Qual o valor da bike?'
                    }
                />
                <CaixaMensagem envio="user" mensagem={'5000'} />

            </main>
            <InputTexto />
        </div>
    );
}
