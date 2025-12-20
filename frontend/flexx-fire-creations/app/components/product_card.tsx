
export default function ProductCard({ creation }: { creation: Creation }) {
    console.log(creation);
    console.log(creation.image);
    return (
        <div className="flex flex-col border-3 border-orange-50 rounded-lg">
            <img src={creation.image} alt={creation.name} />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{creation.name}</h2>
                <p className="text-lg font-semibold">${creation.price}</p>
            </div>
            <button>Add To Cart</button>
        </div>
    );
}