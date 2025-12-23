import type { Color, ColorCombo } from "~/creation";
import { useState } from "react";


export default function ColorOptions({ colors, colorCombos } : { colors: Color[], colorCombos: ColorCombo[] }) {
    const [selectedColor, setSelectedColor] = useState<Color | null | ColorCombo>(null);
    const colorOptionStyle = " w-8 h-8 rounded-full border border-gray-300 cursor-pointer";
    const selectedColorStyle = " border-3 border-white border-solid";
    return (
        <div className="flex space-x-2">
            {colors && colors.map((color) => (
                <button
                    key={color.id}
                    className={colorOptionStyle + (selectedColor?.id === color.id ? selectedColorStyle : "")}
                    style={{ backgroundColor: color.hex_code }}
                    onClick={() => setSelectedColor(color)}
                />
            ))}
            {colorCombos && colorCombos.map((colorCombo) => (
                    <button className={"flex overflow-hidden" + colorOptionStyle + (selectedColor?.id === colorCombo.id ? selectedColorStyle : "")}  onClick={() => setSelectedColor(colorCombo)}>
                        <div key={colorCombo.colors[0].id} style={{backgroundColor: colorCombo.colors[0].hex_code}} className="h-full w-1/2"></div>
                        <div key={colorCombo.colors[1].id} style={{backgroundColor: colorCombo.colors[1].hex_code}} className="h-full w-1/2"></div>
                    </button>
            ))}
        </div>
    );
}