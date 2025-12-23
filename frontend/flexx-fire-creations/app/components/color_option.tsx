import type { Color } from "~/creation";
import { useState } from "react";

export default function ColorOptions({ colors } : { colors: Color[] }) {
    const [selectedColor, setSelectedColor] = useState<Color | null>(null);
    return (
        <div className="flex space-x-2">
            {colors && colors.map((color) => (
                <button
                    key={color.id}
                    className={"w-8 h-8 rounded-full border border-gray-300 cursor-pointer" + (selectedColor?.id === color.id ? " border-3 border-white border-solid" : "")}
                    style={{ backgroundColor: color.hex_code }}
                    onClick={() => setSelectedColor(color)}
                />
            ))}
        </div>
    );
}