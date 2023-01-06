

interface ItemTotalProps {
    total: number
}

export function ItemTotal({ total }: ItemTotalProps){
    return(
        <div>
            <h1>{total}</h1>
        </div>
    )
}