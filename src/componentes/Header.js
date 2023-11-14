"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b-2 border-zinc-300 flex justify-center">
            <Link href={"/"}>
                <Image
                    className="aspect-auto"
                    src="/imgs/logo-porto.webp"
                    alt="Logo da Porto Seguro"
                    width={180}
                    height={0}
                />
            </Link>
        </header>
    );
}
