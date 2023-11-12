"use client";

import { useEffect, useState } from "react";
// componentes
import ChatBotFooter from "../../../componentes/ChatBotFooter.js";
import Mensagem from "../../../componentes/Mensagem.js";
import mensagens from "../../../utils/mensagens.json";

export default function ChatBot() {
    const [isDesabled, setIsDesabled] = useState(false);

    useEffect(() => {
        window.scrollTo({
            top: document.documentElement.clientHeight,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className="max-w-sm flex flex-col pb-16 md:max-w-2xl mx-auto space-y-5 pt-4">
            {mensagens.map((m, i) => (
                <Mensagem key={i} {...m} />
            ))}
            <ChatBotFooter href={"/envio-fotos"} desabilitado={isDesabled} />
        </div>
    );
}
