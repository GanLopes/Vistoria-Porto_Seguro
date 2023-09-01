import Image from "next/image";

export default function Headers(){
    return(
        <header className="w-full flex justify-center">
            <Image className="aspect-auto" src="/imgs/logo-porto.webp" alt="Logo da Porto Seguro" width={150} height={0}/>
        </header>
    )
}
