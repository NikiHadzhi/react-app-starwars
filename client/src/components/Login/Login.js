import style from './Login.module.css'

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import * as authService from '../../services/authService';



export const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));


        authService.login(email, password)
            .then(userData => {
                userLogin({ id: userData._id, email: userData.email, accessToken: userData.accessToken });
                navigate('/');
            }).catch(error => {
                e.target.reset();
            });
    };


    return (
        
            <div className={style.container}>
                <div className={style.box}>
                    <h2>Login</h2>
                    <form onSubmit={submitHandler}>
                        <input type="email" name="email" placeholder="email" />
                        <input type="password" name="password" placeholder="password" />
                        <div className={style.btns}>
                            <button className={style.loginBtn} type="submit">Login</button>
                            <NavLink className={style.registerBtn} to={'/register'}> Sign Up </NavLink>
                        </div>
                    </form>
                </div>
            </div>
    )
}