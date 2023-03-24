import React from "react"

export function ItemCard() {
    return (
        <div
            className="w-60 h-80 border border-gray-400 bg-white shadow-md rounded flex flex-col"
        >
            <div className="">
                <img
                    src="https://productimages.hepsiburada.net/s/376/222-222/110000393492325.jpg"
                    alt="Asus laptop"
                    className="h-full w-full"
                />
            </div>
            <div className="flex flex-col p-2 gap-2 bg-gray-400 h-full">
                <div>Laptop Brand</div>
                <div>5.000 Manat</div>
                <div>
                    <button
                        className="w-full py-1 px-2 bg-blue-500 text-white rounded border-blue-700"
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
