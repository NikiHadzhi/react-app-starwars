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

    return (
        <section id="deatils-page">
            <div className={style.wrapper}>
                <div className={style.image}>
                    <img className={style.image} src={char.imgUrl} alt="Loading..." />
                </div>
                <div className={style.info}>
                    <div className={style.text}>
                        <div className={style.text}>
                            <h1>{char.name}</h1>
                            <h3>Height: {char.height}</h3>
                            <h3>Species: {char.species}</h3>
                            <h3>Gender: {char.gender}</h3>
                            <p>Description: {char.description}</p>
                        </div>
                    </div>

                    {user.id === char._ownerId && (
                        <div className={style.btns}>
                            <NavLink className={style.edit} to={`/catalog/details/edit/${char._id}`}>Edit</NavLink>
                            <NavLink className={style.delete} to={`/catalog/details/delete/${char._id}`}> Delete </NavLink>
                        </div>
                    )}

                </div>
            </div>
        </section>
    )
}


