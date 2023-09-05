import Link from "next/link";
import CaixaMensagem from "../Componentes/CaixaMensagem/page";
import Headers from "../Componentes/Header/page";
import InputTexto from "../Componentes/InputTexto/page";

export default function Home() {
    return (
        <div >
            <Link href={"./paginas/envioFotos"}>
                <Headers/>
            </Link>
            <main>
                <CaixaMensagem envio="bot" mensagem={"Olá, sou o ChatBot e vou ajudar você com a vistoria. Podemos começar?"}/>
                <CaixaMensagem envio="user" mensagem={"Sim"}/>
                <CaixaMensagem envio="bot" mensagem={"Tudo Bem, antes de começarmos você possue alguma duvida"}/>
                <CaixaMensagem envio="user" mensagem={"Não"}/>
                <CaixaMensagem envio="bot" mensagem={"Tudo Bem, vamos começar"}/>
                <CaixaMensagem envio="user" mensagem={"Sim"}/>
            </main>
            <InputTexto/>
        </div>
    )
}
