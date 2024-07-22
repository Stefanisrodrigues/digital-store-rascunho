const Collection = () => {
    return (
        <div className="container mx-auto text-center mt-10" id="collection">
            <h2 className="font-oswald text-gray-700 text-2xl">Coleções em Destaque</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col">
                    <img src="collection-1.png" className="rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"/>

                    <button className="absolute left-10.1% right-10.1% top-10% bottom-70% bg-white-500 hover:bg-white600 text-primary px-4 py-2 rounded-md font-inter text-sm font-bold">
        Comprar
    </button>
                </div>
                <div className="col">
                    <img src="collection-2.png" className="rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"/>
                    
                    <button className="absolute left-10.1% right-10.1% top-10% bottom-70% bg-white-500 hover:bg-white600 text-primary px-4 py-2 rounded-md font-inter text-sm font-bold">
        Comprar
    </button>                </div>
                <div className="col relative">
    <img src="collection-3.png" className="rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"/>

    <button className="absolute left-10.1% right-10.1% top-10% bottom-70% bg-white-500 hover:bg-white600 text-primary px-4 py-2 rounded-md font-inter text-sm font-bold">
        Comprar
    </button>
</div>
            </div>
        </div>
    );
};

export default Collection;