import Link from "next/link";

export default function Botao({ href = "#", texto, disabled = true }) {
    return (
        <Link
            href={disabled ? "#" : href}
            className={
                !!disabled
                    ? "hover:bg-blue-200 bg-blue-300 py-3 px-4 rounded-md text-white/70 font-medium text-lg"
                    : "hover:bg-blue-700 bg-blue-500 py-3 px-4 rounded-md text-white font-medium text-lg"
            }
        >
            {texto}
        </Link>
    );
}
