/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Title } from './Title'
import { ListCard } from './ListCard'
import { CreateBox } from './CreateBox'
import { Service } from '../API/Service'
import { useFetching } from '../hooks/useFetching'

export type TItem = {
    id: number,
    content: string
}

export const Creator = () => {

    const [list, setList] = useState<TItem[]>([]); // Указываем тип TItem[]
    const [fetchList, isListLoading, ListError] = useFetching(async () => {
        const respone = await Service.getAllCards();
        setList(respone.data);
    });

    const [textAtia, setTextAtia] = useState<string>('');
    const [countId, setCountId] = useState<number>(0)

    function handleTextaria(e: string) {
        setTextAtia(e);
    }

    function handleBtnCreate(e: string) {
        if(textAtia === '') {
            return;
        }
        Service.create(countId, textAtia);
        setCountId(countId + 1);
        setTextAtia('');
        fetchList();

    }

    function handleBtnDelete(e: TItem) {
        const filterList = list.filter((item: TItem): boolean => item.id !== e.id);
        setList(filterList);
        Service.delete(e.id)
    }

    function updateData() {
        fetchList();
    }

    useEffect(() => {
        fetchList();
    }, [])

  return (
    <div>
        <Title updateData={updateData}/>
        {isListLoading ? (
            <div>Загрузка</div>   
        )
        : (
            <ListCard handleBtnDelete={handleBtnDelete} list={list}/>
        )
    }
        <CreateBox value={textAtia}  handleTextaria={handleTextaria} handleBtnCreate={handleBtnCreate}/>
    </div>
  )
}
