import { useContext, useEffect } from 'react';
import { CharContext } from '../../context/CharContext';
import { Character } from './Item/Character'
import * as request from '../../services/charService';

export const Characters = () => {
    const { characters, addCharacters } = useContext(CharContext);

    useEffect(() => {
        request.getAll()
        .then(res => res)
        .then(data => addCharacters(data));
    }, [])

    return (
        <ul>
            {characters.map(x => <Character key={x._id} char={x} />)}
        </ul>
    )
}
