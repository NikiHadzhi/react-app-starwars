import { NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import style from './Header.module.css'

export const Header = () => {
    const navBarStyle = ({ isActive }) => {
        return isActive ? style.active : style.bar;
    }

    const username = (email) => {
        let user = email.split('@');
        let username = user[0].charAt(0).toUpperCase() + user[0].substring(1);
        return username;
    }

    const { user } = useContext(AuthContext);

    return (
        <header>
            <nav>
                {user.email
                    ? <>
                        <NavLink className={navBarStyle} to='/logout'>Logout</NavLink>
                        <NavLink className={navBarStyle} to='/create'>Create</NavLink>
                    </>
                    : <>
                        <NavLink className={navBarStyle} to='/register'>Register</NavLink>
                        <NavLink className={navBarStyle} to='/login'>Login</NavLink>
                    </>
                }

                <NavLink className={navBarStyle} to='/catalog'>Catalog</NavLink>
                <NavLink className={navBarStyle} to='/'>Home</NavLink>

                <div className={style.greeting}>
                    {user.email
                        ? <p>Hello, {username(user.email)}!</p>
                        : <p>Welcome, young padawan</p>
                    }
                </div>
            </nav>
        </header>
    )
}