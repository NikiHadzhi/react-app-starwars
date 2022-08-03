import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import * as request from '../../services/charService';
import style from './Create.module.css'

import { AuthContext } from '../../context/AuthContext';

export const Create = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    console.log(user);
    const [values, setValues] = useState({
        name: '',
        height: '',
        mass: '',
        imgUrl: '',
        hairColor: '',
        eyeColor: '',
        gender: ''
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        await request.createOne(values);
        navigate('/catalog');
    };

    return (
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
                        <button type="submit">Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}