import Link from 'next/link';

function BotaoHeader() {
    return (
        <Link
            href={'/equipe'}
            className="font-semibold text-blue-500 hover:text-white hover:bg-blue-500 border-2 border-blue-500
            px-2 rounded-sm active:text-white active:bg-blue-500"
        >
            Equipe
        </Link>
    );
}

export default BotaoHeader;
