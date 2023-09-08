import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <header className="w-full flex justify-center border-b-2">
            <Link href="/">
                <Image className="aspect-auto" src="/imgs/logo-porto.webp" alt="Logo da Porto Seguro" width={150} height={0}/>
            </Link>
        </header>
    )
}
