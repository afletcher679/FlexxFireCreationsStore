import type { Creation } from "~/creation";
import { useState } from "react";
import ColorOptions from "./color_option";
import "~/fonts.css";

export default function CreationOrderForm({creation} : {creation: Creation}) {
    const [quantity, setQuantity] = useState(1);
    const quantityButtonStyle = "bg-orange-200 rounded-md text-black w-1/4 bg-orange-200 active:bg-orange-400 text-bold text-xl";

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl text-orange-500 font-zalando-semibold">{creation.name}</h1>
                <p className="text-semibold text-xl">${creation.price}</p>
                <p>{creation.mini_description}</p>

                <ColorOptions colors={creation.colors} colorCombos={creation.color_combos}/>

                {/* Quantity Buttons */}
                <div className="flex gap-2 w-1/4">
                <button className={quantityButtonStyle + (quantity <= 1 ? "cursor-pointer" : "")}
                    disabled={quantity <= 1} 
                    onClick={() => 
                        setQuantity(prev => Math.max(1, prev - 1))
                    }>-</button>
                <input className="border-solid border border-gray-300 rounded-md p-1 w-full text-center w-1/2" 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}/>
                <button className={quantityButtonStyle} onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>

                <button className="btn-orange">Add to Cart</button>  
        </div>
    )
}