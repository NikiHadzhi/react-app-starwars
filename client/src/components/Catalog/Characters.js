import { useContext } from 'react';
import { NavLink } from 'react-router-dom' ;
import { CharContext } from '../../context/CharContext';
import { Character } from './Item/Character'
import style from './Characters.module.css'

export const Characters = () => {
    const { characters } = useContext(CharContext);

    return (
        <>
            {characters.length > 0
                ? <ul className={style.container}>
                    {characters.map(x => <Character key={x._id} char={x} />)}
                </ul>
                : <div className={style.emptyContainer}>
                    <p>No characters found</p>
                    <NavLink className={style.link} to='/create'>Click here to add new character</NavLink>
                </div>
            }
        </>
    )
}
