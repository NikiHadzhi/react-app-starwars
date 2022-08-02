import { useParams, NavLink } from "react-router-dom";

import style from './CharDetails.module.css';

import * as request from '../../services/charService';
import { useEffect, useState } from "react";

export const CharDetails = () => {
    const [char, setChar] = useState({});
    const { charId } = useParams();

    useEffect(() => {
        request.getOne(charId)
            .then(res => res)
            .then(data => setChar(data))
    }, [charId]);

    return (
        <section id="deatils-page">
            <div class={style.wrapper}>
                <div class={style.image}>
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

                    <div class={style.btn}>
                        <NavLink className={style.edit} to={`/catalog/details/edit/${char._id}`}>Edit</NavLink>
                        <NavLink className={style.delete} to={`/catalog/details/delete/${char._id}`}> Delete </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}


