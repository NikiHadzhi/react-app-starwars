import { useParams, NavLink } from "react-router-dom";

import style from './CharDetails.module.css';

import * as request from '../../services/charService';
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const CharDetails = () => {
    const [char, setChar] = useState({});
    const [publicationLikes, setPublicationLikes] = useState(0);
    const [publicationLikedByUser, setPublicationLikedByUser] = useState(0);
    const { charId } = useParams();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const getCharData = async () => {
            const [charData, likesData, userLikedData] = await Promise.all([
                request.getOne(charId),
                request.getLikes(charId),
                request.getUserLikes(charId, user.id)
            ]);

            setChar(state => ({
                ...state,
                ...charData
            }));
            setPublicationLikes(likesData);
            setPublicationLikedByUser(userLikedData);
        }

        getCharData();

    }, [charId, publicationLikes, user.id]);

    const onActionHandler = async (e) => {
        if (e.target.name === 'like') {
            await request.like({ charId });
        } else if (e.target.name === 'dislike') {
            const data = await request.getLikesId(charId);
            const idOfLike = data[0]?._id

            if (idOfLike !== undefined) {
                await request.dislike(idOfLike);
            };
        }

        const publicationsLikeData = await request.getLikes(charId);
        setPublicationLikes(publicationsLikeData);
    }

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
                            <h3>{char.name} is liked by: {publicationLikes} people</h3>
                            <p>Description: {char.description}</p>
                        </div>
                    </div>

                    {user.id === char._ownerId && (
                        <div className={style.btns}>
                            <NavLink className={style.edit} to={`/catalog/details/edit/${char._id}`}>&#9998; Edit</NavLink>
                            <NavLink className={style.delete} to={`/catalog/details/delete/${char._id}`}>&#128465; Delete</NavLink>
                        </div>
                    )}
                    {user.id !== char._ownerId && user.email && (
                        <div className={style.actionBtns}>
                            {publicationLikedByUser === 0
                                ? <button name='like' className={style.like} onClick={(e) => onActionHandler(e)}>&#128077; Like</button>
                                : <button name='dislike' className={style.dislike} onClick={(e) => onActionHandler(e)}>&#128078; Dislike</button>
                            }
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}


