"use client";
// components
import CampoInserirImg from "../../../componentes/CampoInserirImg.js";
import ChatBotFooter from "../../../componentes/ChatBotFooter.js";
// utils
import imagens from "/src/utils/imagens.json";

export default function EnvioFotos() {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-center text-3xl my-10 mx-auto font-semibold ">
                Envio de Fotos
            </h1>
            <div
                className="mb-20 flex flex-wrap mx-auto items-center 
            flex-col md:flex-row justify-center gap-10"
            >
                {imagens.map((img) => (
                    <CampoInserirImg
                        key={img.titulo}
                        img={img.img}
                        titulo={img.titulo}
                    />
                ))}
            </div>
            <ChatBotFooter href={"/vistoria-concluida"} desabilitado={false} />
        </div>
    );
}
