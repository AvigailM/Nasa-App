import React, { useEffect, useState } from 'react';
import { Weather } from '../types';

type ListItemProps = {
    label: string;
    item: any; //Weather item
}

const ListItem = ({ label,
    item }: ListItemProps) => {
    if (!item) {
        return null
    }
    return <li className='listRow'>
        <p className='label'>{label}:</p>
        <p>{item}</p>
    </li>

}

export default ListItem;