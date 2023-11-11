"use client";
import Link from "next/link";
//componentes
import Botao from "@/componentes/Botao";
import { useState } from "react";

export default function Home() {
    const [isDesabled, setIsDesabled] = useState(true);

    const handleCheck = () => {
        setIsDesabled((prev) => (prev ? false : true));
    };

    return (
        <div className="flex items-center justify-center h-full md:max-w-xl mx-auto">
            <div className="border-2 border-sky-600 md:border-zinc-300 md:hover:border-sky-600 md:hover:bg-sky-50 bg-sky-50 md:bg-transparent transition-colors duration-200 rounded-xl p-5 flex flex-col text-center space-y-10 w-full">
                <h1 className="text-3xl font-bold">Bem-Vindo</h1>
                <p className="w-60 mx-auto">
                    Clique em avançar para que possamos começar
                </p>
                <label href={"termos"}>
                    <input
                        id="termos"
                        type="checkbox"
                        className="mr-2"
                        onClick={handleCheck}
                    />
                    Aceito os{" "}
                    <Link
                        href={"#"}
                        className="text-sky-800 underline-offset-2 hover:underline active:underline italic"
                    >
                        Termos de Segurança
                    </Link>
                    <span> e </span>
                    <Link
                        href={"#"}
                        className="text-sky-800 underline-offset-2 hover:underline active:underline italic"
                    >
                        Responsabilidade
                    </Link>
                </label>
                <Botao disabled={isDesabled} href="/chat-bot" texto="Avançar" />
            </div>
        </div>
    );
}
