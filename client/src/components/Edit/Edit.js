import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import * as request from '../../services/charService';
import style from './Edit.module.css'

export const Edit = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        height: '',
        mass: '',
        imgUrl: '',
        hairColor: '',
        eyeColor: '',
        gender: ''
    });
    const { charId } = useParams();

    useEffect(() => {
        request.getOne(charId)
            .then(res => res)
            .then(data => setValues(data));
    }, [charId])

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        await request.updateOne(charId, values);
        navigate(`/catalog/details/${charId}`);
    };

    return(
        <div className={style.container}>
        <div className={style.box}>
            <h2>Add new character</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={changeHandler}
                    placeholder="Anakin Skywalker"
                />
                <label htmlFor="height">Height:</label>
                <input
                    id="height"
                    type="text"
                    name="height"
                    value={values.height}
                    onChange={changeHandler}
                    placeholder="188"
                />
                <label htmlFor="mass">Mass:</label>
                <input
                    id="mass"
                    type="text"
                    name="mass"
                    value={values.mass}
                    onChange={changeHandler}
                    placeholder="90" />
                <label htmlFor="image">Image:</label>
                <input
                    id="imgUrl"
                    type="text"
                    name="imgUrl"
                    value={values.imgUrl}
                    onChange={changeHandler}
                    placeholder="http://..."
                />
                <label htmlFor="hairColor">Hair color:</label>
                <input
                    id="hairColor"
                    type="hairColor"
                    name="hairColor"
                    value={values.hairColor}
                    onChange={changeHandler}
                    placeholder="Blond"
                />
                <label htmlFor="eyes">Eyes color:</label>
                <input
                    id="eyes"
                    type="text"
                    name="eyeColor"
                    value={values.eyeColor}
                    onChange={changeHandler}
                    placeholder="Blue"
                />
                <label htmlFor="gender">Gender:</label>
                <input
                    id="gender"
                    type="text"
                    name="gender"
                    value={values.gender}
                    onChange={changeHandler}
                    placeholder="Male"
                />
                <div className={style.btns}>
                    <button type="submit">Edit</button>
                </div>
            </form>
        </div>
    </div>
    )
}