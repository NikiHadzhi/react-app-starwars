import style from './Register.module.css';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';

export const Register = () => {
    const { userLogin } = useContext(AuthContext)
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        const {
            email,
            password,
            confirmPassword
        } = Object.fromEntries(new FormData(e.target));
        
        try {

            if (password !== confirmPassword) {
                throw new Error('Password doesn\'t match');
            }

            authService.register(email, password)
                .then(authData => {
                    userLogin({id: authData._id, email: authData.email, accessToken: authData.accessToken});
                    navigate('/');
                })

        } catch (error) {
            e.target.reset();
        }
    };


    return (
        <div className={style.container}>
            <div className={style.box}>
                <h2>Registration</h2>
                <form onSubmit={submitHandler}>
                    <input type="email" name="email" id="email" placeholder="email" />
                    <input type="password" name="password" id="password" placeholder="password" />
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder=" confirm password" />
                    <div className={style.btns}>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>

    )
}