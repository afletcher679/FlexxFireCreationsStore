
function AddonItem({title, price}: {title: string, price: number}) {
    return (
        <div className="flex justify-between items-center my-3">
            <div className="flex flex-col">
                <h2 className="flex-1">{title}</h2>
                <p>${price}</p>
            </div>
            <button className="btn-orange-qtr">Add</button>
        </div>
    )
}

export default function Purchase_AddOns() {
    return (
        <div>
            <p>Enhance your purchase with our exclusive add-ons!</p>
            <AddonItem title="Rush Order" price={50.00}/>
        </div>
    )
}