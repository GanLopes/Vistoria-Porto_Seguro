"use client"

import Image from 'next/image';
import Link from 'next/link';
import BotaoHeader from '@/componentes/BotaoHeader';
import { useContext, useEffect, useState } from 'react';

export default function Header() {
    return (
        <header className="w-full flex justify-center rounded-b-3xl bg-white shadow-lg shadow-black/10 items-center pr-4">
            <Link href={"/"}>
                <Image
                    className="aspect-auto"
                    src="/imgs/logo-porto.webp"
                    alt="Logo da Porto Seguro"
                    width={150}
                    height={0}
                />
            </Link>
        </header>
    );
}
