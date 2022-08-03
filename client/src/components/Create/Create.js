import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as request from '../../services/charService';
import style from './Create.module.css'

export const Create = () => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
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
        console.log('logged');
        await request.createOne(values);
        navigate('/catalog');
    };

    //validations 

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
                    <label htmlFor="mass">Mass:</label>
                    <input
                        id="mass"
                        type="number"
                        name="mass"
                        value={values.mass}
                        onChange={changeHandler}
                        onBlur={(e) => validator(e, 'number')}
                        placeholder="90" />
                    {errors.mass &&
                        <p className={style.error}>
                            Mass cannot be empty or negative number!
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
                    <label htmlFor="hairColor">Hair color:</label>
                    <input
                        id="hairColor"
                        type="text"
                        name="hairColor"
                        value={values.hairColor}
                        onChange={changeHandler}
                        onBlur={(e) => validator(e, 'length')}
                        placeholder="Blond"
                    />
                    {errors.hairColor &&
                        <p className={style.error}>
                            Invalid hair color!
                        </p>
                    }
                    <label htmlFor="eyes">Eyes color:</label>
                    <input
                        id="eyes"
                        type="text"
                        name="eyeColor"
                        value={values.eyeColor}
                        onChange={changeHandler}
                        onBlur={(e) => validator(e, 'length')}
                        placeholder="Blue"
                    />
                    {errors.eyeColor &&
                        <p className={style.error}>
                            Invalid eyes color!
                        </p>
                    }
                    <label htmlFor="gender">Gender:</label>
                    <select className={style.selectMenu} name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <div className={style.btn}>
                        <button type="submit" disabled={isAllDataValid}>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}