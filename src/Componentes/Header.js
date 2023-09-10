import Image from 'next/image';
import Link from 'next/link';
import BotaoHeader from './BotaoHeader';

export default function Header({texto = "Equipe"}) {
    return (
        <header className="w-full flex justify-between border-b-2 items-center pr-4">
            <Link href="/">
                <Image
                    className="aspect-auto"
                    src="/imgs/logo-porto.webp"
                    alt="Logo da Porto Seguro"
                    width={150}
                    height={0}
                />
            </Link>
            <BotaoHeader texto={texto} />
        </header>
    );
}
