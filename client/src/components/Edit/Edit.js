import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import * as request from '../../services/charService';
import style from './Edit.module.css'

export const Edit = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        name: '',
        height: '',
        imgUrl: '',
        gender: '',
        species: '',
        description:''
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

        try {
            if (Object.values(values).some(x => x === '')) {
                throw new Error();
            }

            await request.updateOne(charId, values);
            navigate(`/catalog/details/${charId}`);
            
        } catch (error) {
            alert('All fields are required!')
        }

    };

    const validator = (e, condition) => {
        switch (condition) {
            case 'length':
                setErrors(state => ({
                    ...state,
                    [e.target.name]: values[e.target.name].length < 4,
                }));
                break;

            case 'number':
                const value = Number(e.target.value);

                setErrors(state => ({
                    ...state,
                    [e.target.name]: value <= 0,
                }));
                break;
            case 'url':
                let url = e.target.value.split('://');

                setErrors(state => ({
                    ...state,
                    [e.target.name]: url[0] !== 'https' || e.target.value.length < 15,
                }));
                break;

            default: console.log('default');
        }
    }

    const isAllDataValid = Object.values(errors).some(x => x);

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
                        onBlur={(e) => validator(e, 'length')}
                        placeholder="Anakin Skywalker"
                    />
                    {errors.name &&
                        <p className={style.error}>
                            Name should be at least 4 characters long!
                        </p>
                    }
                    <label htmlFor="height">Height:</label>
                    <input
                        id="height"
                        type="number"
                        name="height"
                        value={values.height}
                        onChange={changeHandler}
                        onBlur={(e) => validator(e, 'number')}
                        placeholder="188"
                    />
                    {errors.height &&
                        <p className={style.error}>
                            Height cannot be empty or negative number!
                        </p>
                    }
                    <label htmlFor="species">Species:</label>
                    <input
                        type="text"
                        name="species"
                        value={values.species}
                        onChange={changeHandler}
                        onBlur={(e) => validator(e, 'length')}
                        placeholder="human" />
                    {errors.species &&
                        <p className={style.error}>
                            Species should be at least 4 characters long!
                        </p>
                    }
                    <label htmlFor="image">Image:</label>
                    <input
                        id="imgUrl"
                        type="url"
                        name="imgUrl"
                        value={values.imgUrl}
                        onChange={changeHandler}
                        onBlur={(e) => validator(e, 'url')}
                        placeholder="https://..."
                    />
                    {errors.imgUrl &&
                        <p className={style.error}>
                            Url is not correct!
                        </p>
                    }
                    <label htmlFor="gender">Gender:</label>
                    <select
                        className={style.selectMenu}
                        name="gender"
                        onChange={changeHandler}
                        value={values.gender}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        className={style.description}
                        type="text"
                        name="description"
                        value={values.description}
                        onChange={changeHandler}
                        onBlur={(e) => validator(e, 'length')}
                        placeholder="Once the heroic Jedi Knight..."
                    />
                    {errors.description &&
                        <p className={style.error}>
                            Field is required!
                        </p>
                    }
                    <div className={style.btn}>
                        <button type="submit" disabled={isAllDataValid}>Edit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}