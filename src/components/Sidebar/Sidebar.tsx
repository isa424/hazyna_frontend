import React from "react"

export function Sidebar() {
    const categories = ['brand', 'price range', 'rating', 'search filter']

    return (
        <div className="border h-full w-1/4">
            <div className="p-5">
                <p className="font-bold text-normal">Items Category</p>
            </div>
            <div className="flex flex-col divide-y">
                <div className="p-5">
                    <span>20 items</span>
                </div>
                {categories.map((c) => (
                    <div className="p-5">{c}</div>
                ))}
            </div>
        </div>
    )
}
