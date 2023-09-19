import '@/app/globals.css';
import Header from '@/componentes/Header';
import {Roboto} from "next/font/google"

const fonte = Roboto({subsets:["latin"], weight:["400", "500", "700", "900"]})

export const metadata = {
    title: 'Web Challenge Porto',
    description: 'Faça a sua vistoria com quem garante a segurança',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-Br">
            <body className={`bg-[#f5f5f5] ${fonte.className}`}>
                <Header/>
                {children}
            </body>
        </html>
    );
}
