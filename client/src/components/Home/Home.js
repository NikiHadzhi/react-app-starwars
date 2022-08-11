import style from './Home.module.css'

// import * as request from '../../services/charService';
// import {  useContext } from 'react';
// import { CharContext } from '../../context/CharContext'
// import { RecentlyAdded } from './RecentlyAdded/RecentlyAdded';
import { Search } from './Search/Search';

export const Home = () => {
    // const { characters } = useContext(CharContext);
    // const [characters, setCharacters] = useState([]);

    // useEffect(() => {
    //     request.getRecentlyAdded()
    //         .then(res=>res)
    //         .then(data => setCharacters(data));
    // },[])

    return (
        <div className={style.homeContainer}>
            <img className={style.imageBox} src="../../star-wars-logo.png" alt="Loading..." />
            <div>
                <div>
                    <Search/>
                    {/* <h1>Recently added:</h1> */}
                    {/* {characters.map(x => (<RecentlyAdded key={x._id} character={x} />))} */}
                </div>
            </div>
        </div>
    )
}   