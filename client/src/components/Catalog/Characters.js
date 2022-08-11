import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CharContext } from '../../context/CharContext';
import { Character } from './Item/Character'
import style from './Characters.module.css'
import * as request from '../../services/charService';

export const Characters = () => {
    const { characters } = useContext(CharContext);
    const [chars, setChars] = useState(characters);
console.log(chars);

    useEffect(() => {
        request.getAll()
            .then(res=>res)
            .then(data => setChars(data))
    }, [setChars]);

    return (
        <>
            {chars.length > 0
                ? <ul className={style.container}>
                    {chars.map(x => <Character key={x._id} char={x} />)}
                </ul>
                : <div className={style.emptyContainer}>
                    <p>No characters found</p>
                    <NavLink className={style.link} to='/create'>Click here to add new character</NavLink>
                </div>
            }
        </>
    )
}
