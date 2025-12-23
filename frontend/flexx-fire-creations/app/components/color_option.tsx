import type { Color } from "~/creation";

export default function ColorOptions({ colors } : { colors: Color[] }) {
    return (
        <div className="flex space-x-2">
            {colors && colors.map((color) => (
                <div
                    key={color.id}
                    className="w-8 h-8 rounded-full border border-gray-300"
                    style={{ backgroundColor: color.hex_code }}
                />
            ))}
        </div>
    );
}