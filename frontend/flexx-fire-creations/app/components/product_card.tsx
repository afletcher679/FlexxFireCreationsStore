import { IoCartOutline } from 'react-icons/io5';
import type { Creation } from '~/creation';

export default function ProductCard({ creation }: { creation: Creation }) {
    return (
        <div className="flex flex-col 
        min-w-48 max-w-48 w-full 
        min-h-80 max-h-80 h-full
        border-3 border-solid border-orange-500 rounded-lg 
        hover:shadow-lg/40 shadow-orange-400 cursor-pointer 
        hover:-translate-y-1">
            <img className="w-full h-40 object-cover rounded-sm" src={creation.gallery_images.find(x => x.featured === true)?.image || creation.gallery_images[0]?.image} alt={creation.name} />
            <div className="p-2 flex-1">
                <h2 className="text-xl font-bold mb-2">{creation.name}</h2>
                <p className="text-lg font-semibold text-orange-400">${creation.price}</p>
            </div>
            <button className="bg-orange-500 w-full">
                <div className="flex items-center content-center justify-center p-2">
                    <div className="me-2">
                        <IoCartOutline size={24}/>
                    </div>
                    Add To Cart
                </div>
            </button>          
        </div>
    );
}