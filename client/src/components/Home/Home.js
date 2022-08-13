import style from './Home.module.css'

import { Search } from './Search/Search';

export const Home = () => {
    return (
        <div className={style.homeContainer}>
            <img className={style.imageBox} src="../../star-wars-logo.png" alt="Loading..." />
            <div>
                <div>
                    <Search/>
                </div>
            </div>
        </div>
    )
}   