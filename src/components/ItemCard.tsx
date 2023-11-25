import { TItem } from "./Creator"

interface ItemCardProps {
    item: {
        id: number,
        content: string
    },
    handleBtnDelete: (e: TItem) => void
}


export const ItemCard = ({item, handleBtnDelete}: ItemCardProps) => {
  return (
    <div style={{display:'flex', alignItems:'center'}}>
        <div> 
            {item.content}
        </div>
        <button onClick={() => handleBtnDelete(item)}>X</button>
    </div>

  )
}
