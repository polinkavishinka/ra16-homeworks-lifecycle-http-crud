import React from 'react'
import { ItemCard } from './ItemCard'
import { TItem } from './Creator'

interface IIlistProps {
    list: {
        id: number,
        content: string
    }[],
    handleBtnDelete: (e: TItem) => void
}

export const ListCard = ({list, handleBtnDelete}: IIlistProps) => {
  return (
    <div>
        {list.length === 0 ? (
            <div>Пусто</div>
            ):(
            list.map((item: TItem)=> (
                <ItemCard 
                item={item}
                handleBtnDelete={handleBtnDelete}
                />
            ))
        )}
    </div>
  )
}
