"use client";

import { useState } from "react";
// componentes
import ChatBotFooter from "/src/componentes/ChatBotFooter.js";
import Mensagem from "/src/componentes/Mensagem.js";
import mensagens from "/src/utils/mensagens.json";

export default function ChatBot() {
    const [isDesabled, setIsDesabled] = useState(false);

    return (
        <div className="max-w-sm flex flex-col md:max-w-2xl mx-auto space-y-5 pt-4">
            {mensagens.map((m, i) => (
                <Mensagem key={i} {...m} />
            ))}
            <ChatBotFooter href={"/envio-fotos"} desabilitado={isDesabled} />
        </div>
    );
}
