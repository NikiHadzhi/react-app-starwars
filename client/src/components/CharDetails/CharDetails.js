import { useParams, NavLink } from "react-router-dom";

import style from './CharDetails.module.css';

import * as request from '../../services/charService';
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const CharDetails = () => {
    const [char, setChar] = useState({});
    const { charId } = useParams();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        request.getOne(charId)
            .then(res => res)
            .then(data => setChar(data))
    }, [charId]);

    console.log(user.id);
    console.log(char._ownerId);
    return (
        <section id="deatils-page">
            <div className={style.wrapper}>
                <div className={style.image}>
                    <img className={style.image} src={char.imgUrl} alt="Loading..." />
                </div>
                <div class={style.info}>
                    <div class={style.text}>
                        <div class={style.text}>
                            <h1>{char.name}</h1>
                            <h3>Height: {char.height}</h3>
                            <h3>Mass: {char.mass}</h3>
                            <h3>Hair color: {char.hairColor}</h3>
                            <h3>Eyes color: {char.eyeColor}</h3>
                            <h3>Gender: {char.gender}</h3>
                            <p>Description: TODO!</p>
                        </div>
                    </div>

                    {user.id === char._ownerId && (
                        <div className={style.btn}>
                            <NavLink className={style.edit} to={`/catalog/details/edit/${char._id}`}>Edit</NavLink>
                            <NavLink className={style.delete} to={`/catalog/details/delete/${char._id}`}> Delete </NavLink>
                        </div>
                    )}

                </div>
            </div>
        </section>
    )
}


