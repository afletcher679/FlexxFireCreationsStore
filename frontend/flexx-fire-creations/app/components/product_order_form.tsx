import type { Creation } from "~/creation";
import { useState } from "react";
import ColorOptions from "./color_option";

const quantityButtonStyle = "bg-orange-200 rounded-md text-black w-1/4 bg-orange-200 active:bg-orange-400 text-bold text-xl";

export default function CreationOrderForm({creation} : {creation: Creation}) {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl text-orange-500 font-zalando">{creation.name}</h1>
                <p className="text-semibold text-xl">${creation.price}</p>

                <ColorOptions colors={creation.colors}/>

                {/* Quantity Buttons */}
                <div className="flex gap-2 w-1/4">
                <button className={quantityButtonStyle + (quantity <= 1 ? "cursor-pointer" : "")}
                    disabled={quantity <= 1} 
                    onClick={() => 
                        setQuantity(prev => Math.max(1, prev - 1))
                    }>-</button>
                <input className="border-solid border border-gray-300 rounded-md p-1 text-center w-1/2" 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}/>
                <button className={quantityButtonStyle} onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>

                <button className="bg-orange-500 text-white p-2 w-full rounded-md active:bg-orange-700 cursor-pointer">Add to Cart</button>

                <p>{creation.description}</p>
        </div>
    )
}