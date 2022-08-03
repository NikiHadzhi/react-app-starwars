import style from './Character.module.css'
import { NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

export const Character = ({
    char
}
) => {
    const { user } = useContext(AuthContext);

    return (
        <li className={style.element}>
            <div className={style.container}>
                <h2>{char.name}</h2>
                <img className={style.image} src={char.imgUrl} alt="Loading..." />
                {user.email && (
                    <NavLink className={style.link} to={`/catalog/details/${char._id}`}>Details</NavLink>
                )}
            </div>
        </li>
    )
}