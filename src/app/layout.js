import './globals.css'

export const metadata = {
    title: 'Web Challenge Porto',
    description: 'Parte web da solução para a Porto Seguro',
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-Br">
            <body>{children}</body>
        </html>
    )
}
