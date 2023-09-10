"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function CartaoEquipe({ cargo, nome, github }) {
    return (
        <div
            className={`flex transition-[margin-top] duration-700 motion-safe:duration-100 md:w-28 flex-col relative group`}
        >
            <Image
                className="aspect-auto rounded-full shadow-lg"
                src={`https://github.com/${github}.png`}
                alt="Foto de perfil"
                width={150}
                height={0}
            />
            <div className="bg-sky-200 translate-y-4 p-2 w-[150px] rounded-md md:opacity-0 md:group-hover:opacity-100 md:absolute md:translate-y-[100%] md:translate-x-[-10%] shadow-lg md:bottom-[-20px]">
                <div className="w-5 h-5 bg-sky-200 md:hidden lg:block absolute top-0 left-[50%] rotate-45 hidden translate-x-[-50%] translate-y-[-50%]"></div>
                <span className="font-bold flex items-center justify-between text-lg">
                    {nome}
                    <Link
                        href={`https://github.com/${github}`}
                        className="text-sm text-sky-800 underline"
                    >
                        GitHub
                    </Link>
                </span>
                <p className="text-lg">{cargo}</p>
            </div>
        </div>
    );
}

export default CartaoEquipe;
