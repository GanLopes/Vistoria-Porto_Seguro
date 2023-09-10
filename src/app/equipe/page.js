import Botao from '@/Componentes/Botao';
import CartaoEquipe from '@/Componentes/CartaoEquipe';
import Header from '@/Componentes/Header';
import Link from 'next/link';

const listaEquipe = [
    {
        nome: 'Amorgan',
        github: 'GanLopes',
        rm: "98552" 
    },
    {
        nome: 'Gustavo',
        github: 'GuGodoi7',
        rm: "99585"
    },
    {
        nome: 'Roberto',
        github: 'RobertSDM',
        rm:"552520"
    },
    {
        nome: 'Melissa',
        github: 'melissaoli07',
        rm:"98698"
    },
    {
        nome: 'Vinicius ',
        github: 'VniciNN',
        rm: "99069"
    },
];

function equipe() {
    return (
        <>
            <Header texto="Home"/>
            <div className='flex items-center flex-col'>
                <h1 className="font-semibold text-3xl my-10">
                    Equipe MegaTech
                </h1>
                <main
                    className="flex items-center md:justify-center flex-col md:flex-row
                2xl:max-w-6xl md:max-w-4xl mx-auto gap-x-10 gap-y-20 h-fit"
                >
                    {listaEquipe.map(membro => (
                        <CartaoEquipe
                            key={membro.github}
                            cargo={membro.cargo}
                            github={membro.github}
                            nome={membro.nome}
                            rm={membro.rm}
                        />
                    ))}
                </main>
                <Link href={"https://github.com/RobertSDM/Web-Challenge-Porto"} className="h-fit my-20">
                    <Botao texto={"Repositório da Solução"}/>
                </Link>
            </div>
        </>
    );
}

export default equipe;
