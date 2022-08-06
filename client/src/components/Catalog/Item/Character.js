import style from './Character.module.css'
import { NavLink } from 'react-router-dom';


export const Character = ({
    char
}
) => {

    return (
        <li className={style.element}>
            <div className={style.container}>
                <h2>{char.name}</h2>
                <img className={style.image} src={char.imgUrl} alt="Loading..." />
                <div className={style.detailsBtn}>
                    <NavLink className={style.link}to={`/catalog/details/${char._id}`}>Details</NavLink>
                </div>
            </div>
        </li>
    )
}