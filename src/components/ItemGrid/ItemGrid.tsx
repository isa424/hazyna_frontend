import { ItemCard } from "../ItemCard/ItemCard"

export function ItemGrid() {
    const data = new Array(40).fill(1)

    return (
        <div className='bg-blue-200 flex flex-row flex-wrap w-3/4 gap-10 p-10'>
            {data.map((d, i) => (
                <ItemCard key={i}/>
            ))}
        </div>
    )
}
