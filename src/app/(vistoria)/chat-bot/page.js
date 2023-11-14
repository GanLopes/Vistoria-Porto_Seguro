"use client";

import { useEffect, useRef, useState } from "react";
import Link from "../../../../node_modules/next/link.js";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
// componentes
import Mensagem from "../../../componentes/Mensagem.js";

export default function ChatBot() {
    const sessionId = useRef("");
    const [msg, setMsg] = useState([]);
    const [content, setContent] = useState("");

    const sendMessage = async (content, sessionId) => {
        const res = await fetch("../../api/watson", {
            body: JSON.stringify({
                content: content,
                sessionId: sessionId.current,
            }),
            method: "POST",
        });
        const data = await res.json();
        return data;
    };

    const createMessage = (content, author = "bot") => {
        let message = {
            id: crypto.randomUUID(),
            content: content,
            author: author,
        };

        setMsg((prev) => [...prev, message]);
    };

    const messageCenter = () => {
        createMessage(content, "user");
        const watsonResponse = sendMessage(content, sessionId);
        createMessage(watsonResponse);
        window.scrollTo({
            top: document.documentElement.clientHeight,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        async function getSessionId() {
            const res = await fetch("../../api/watson");
            const data = await res.json();
            return data;
        }

        async function initTheBot() {
            const res = await fetch("../../api/watson", {
                body: JSON.stringify({
                    content: "/start",
                    sessionId: sessionId.current,
                }),
                method: "POST",
            });

            const data = await res.json();
            createMessage(data);
        }

        getSessionId().then((data) => {
            sessionId.current = data;
            initTheBot();
        });

        window.scrollTo({
            top: document.documentElement.clientHeight,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className="max-w-sm flex flex-col pb-16 md:max-w-2xl mx-auto space-y-5 pt-4 h-full justify-end overflow-y-hidden">
            {msg.map((m) => (
                <Mensagem key={m.id} {...m} />
            ))}
            <section className="flex items-center h-16 w-full max-w-sm md:max-w-2xl bg-[#f5f5f5] fixed bottom-0 pr-4 justify-end">
                {msg.length < 6 ? (
                    <div className="flex justify-between w-full items-center gap-x-2">
                        <input
                            className="flex-grow p-2 rounded-sm border-2 border-sky-700 outline-none"
                            type="text"
                            value={content}
                            onChange={(event) =>
                                setContent(() => event.target.value)
                            }
                            placeholder="Digite a sua resposta"
                        />
                        <button
                            className="bg-blue-600 p-2 rounded-lg"
                            onClick={() => {
                                messageCenter();
                                setContent("");
                            }}
                        >
                            <IoIosSend className="w-6 h-6 text-white" />
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center">
                        <label htmlFor="avançar" className={`mr-2`}>
                            Avançar para próxima etapa
                        </label>
                        <Link
                            href={"/envio-fotos"}
                            className={`bg-blue-600 p-2 rounded-lg
                            `}
                        >
                            <AiOutlineArrowRight
                                id="avançar"
                                className={`w-6 h-6 text-white`}
                            />
                        </Link>
                    </div>
                )}
            </section>
        </div>
    );
}
