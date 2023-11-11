"use client";

import { useState } from "react";
// componentes
import ChatBotFooter from "../../../componentes/ChatBotFooter";
import Mensagem from "../../../componentes/Mensagem";
import mensagens from "../../../utils/mensagens.json";

export default function chatBot() {
    const [isDesabled, setIsDesabled] = useState(false);

    return (
        <div className="max-w-sm flex flex-col md:max-w-2xl mx-auto space-y-5 pt-4">
            {mensagens.map((m) => (
                <Mensagem {...m} />
            ))}
            <ChatBotFooter href={"/envio-fotos"} desabilitado={isDesabled} />
        </div>
    );
}
