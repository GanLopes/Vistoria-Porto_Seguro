export default function Home() {
    return (
        <div className="flex items-center justify-center h-full md:max-w-xl mx-auto">
            <div className="border-2 border-sky-600 md:border-zinc-300 md:hover:border-sky-600 md:hover:bg-sky-50 bg-sky-50 md:bg-transparent transition-colors duration-200 rounded-xl p-5 flex flex-col text-center space-y-5 w-full h-64 items-center justify-center">
                <h1 className="text-3xl font-bold">Vistoria Concluída</h1>
                <p className="mx-auto">
                    Agora você poderá usufruir do <br />
                    melhor seguro do Brasil
                </p>
            </div>
        </div>
    );
}
