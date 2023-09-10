'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function CartaoEquipe({ cargo, nome, github, rm }) {
    return (
        <div
            className={`flex transition-[margin-top] duration-700 motion-safe:duration-100 md:w-28 flex-col group`}
        >
            <Image
                className="aspect-auto rounded-full shadow-lg"
                src={`https://github.com/${github}.png`}
                alt="Foto de perfil"
                width={150}
                height={0}
            />
            <div className="translate-y-4 p-2 rounded-lg bg-zinc-[#f6f6f6] shadow-md">
                <span className="font-bold flex items-center justify-between text-lg">
                    {nome}
                </span>
                <span className="font-semibold flex items-center justify-between text-md">
                    {`rm: ${rm}`}
                </span>
                <p className="text-lg">{cargo}</p>
            </div>
        </div>
    );
}

export default CartaoEquipe;
