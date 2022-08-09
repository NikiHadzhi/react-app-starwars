import { useParams, NavLink } from "react-router-dom";

import style from './CharDetails.module.css';

import * as request from '../../services/charService';
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CharContext } from "../../context/CharContext";

export const CharDetails = () => {
    const { selectCharacter } = useContext(CharContext);
    const { charId } = useParams();
    const [characters, setCharacters] = useState(selectCharacter(charId));
    const [publicationLikes, setPublicationLikes] = useState(0);
    const [publicationLikedByUser, setPublicationLikedByUser] = useState(0);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            const [charData, likesData, userLikedData] = await Promise.all([
                request.getOne(charId),
                request.getLikes(charId),
                request.getUserLikes(charId, user.id)
            ]);

            setCharacters(state => ({
                ...state,
                ...charData
            }));
            setPublicationLikes(likesData);
            setPublicationLikedByUser(userLikedData);
        })();

    }, [charId, publicationLikes, user.id]);

    const onActionHandler = async (e) => {
        if (e.target.name === 'like') {
            await request.like({ charId });
        } else if (e.target.name === 'dislike') {
            const data = await request.getLikesId(charId);
            const likeOfUser = data.find(x => x._ownerId === user.id);

            if (likeOfUser) {
                await request.dislike(likeOfUser._id);
            };
        }

        const publicationsLikeData = await request.getLikes(charId);
        setPublicationLikes(publicationsLikeData);
    }

    return (
            <section id="deatils-page">
            <div className={style.wrapper}>
                <div className={style.image}>
                    <img className={style.image} src={characters.imgUrl} alt="Loading..." />
                </div>
                <div className={style.info}>
                    <div className={style.text}>
                        <div className={style.text}>
                            <h1>{characters.name}</h1>
                            <h3>Height: {characters.height}</h3>
                            <h3>Species: {characters.species}</h3>
                            <h3>Gender: {characters.gender}</h3>
                            <h3>{characters.name} is liked by: {publicationLikes} people</h3>
                            <p>Description: {characters.description}</p>
                        </div>
                    </div>

                    {user.id === characters._ownerId
                        ? <div className={style.btns}>
                            <NavLink className={style.edit} to={`/catalog/details/edit/${characters._id}`}>&#9998; Edit</NavLink>
                            <NavLink className={style.delete} to={`/catalog/details/delete/${characters._id}`}>&#128465; Delete</NavLink>
                        </div>
                        : user.id !== characters._ownerId && user.email && (
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


