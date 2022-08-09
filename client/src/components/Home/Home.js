import style from './Home.module.css'

import * as request from '../../services/charService';
import { useContext, useEffect, useState } from 'react';
import { CharContext } from '../../context/CharContext'

export const Home = () => {
    // const { characters } = useContext(CharContext);
    // const [chars, setChar] = useState({});

    // // console.log(characters);
    // useEffect(() => {
    //     const data = async () => {
    //         const res = await request.getMostLiked();
    //         const test = res.forEach(x => console.log(x))
    //     }

    //     data();
    // }, [setChar])






    return (
        <div className={style.homeContainer}>
            <img className={style.imageBox} src="../../star-wars-logo.png" alt="Loading..." />
        </div>
    )
}   