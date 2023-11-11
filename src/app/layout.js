import "/src/app/globals.css";
import Header from "/src/componentes/Header";
import { Roboto } from "next/font/google";

const fonte = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
});

export const metadata = {
    title: "Web Challenge | Porto Seguro",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-Br">
            <body className={`bg-[#f5f5f5] h-screen ${fonte.className}`}>
                <Header />
                <main className="w-full h-full mx-auto max-w-sm  md:max-w-4xl">
                    {children}
                </main>
            </body>
        </html>
    );
}
