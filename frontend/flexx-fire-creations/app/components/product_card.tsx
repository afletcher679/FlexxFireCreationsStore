export default function ProductCard({ creation }: { creation: Creation }) {
    return (
        <div className="flex flex-col border-3 border-solid border-orange-500 rounded-lg hover:shadow-lg/40 shadow-orange-400 cursor-pointer hover:-translate-y-1">
            <img src={creation.image} alt={creation.name} />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{creation.name}</h2>
                <p className="text-lg font-semibold">${creation.price}</p>
            </div>
            <button className="bg-orange-500">Add To Cart</button>
        </div>
    );
}