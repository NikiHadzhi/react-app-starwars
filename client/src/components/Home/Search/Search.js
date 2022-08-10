import style from './Search.module.css';
import { useContext, useState } from 'react';
import { CharContext } from '../../../context/CharContext';
import { NavLink } from 'react-router-dom';

export const Search = () => {
    const { characters } = useContext(CharContext);
    const [searchData, setSearchData] = useState([]);

    const onSearchHandler = (e) => {
        const inputData = e.target.value.toLowerCase();
        if (inputData !== '') {
            const filteredData = characters.filter(x => x.name.toLowerCase().includes(inputData));
            console.log(searchData);
            setSearchData(filteredData);
        } else {
            setSearchData([]);
        }
    }

    return (
        <>
            <div className={style.searchBox}>
                <input type="text" placeHolder='Search character...' onChange={onSearchHandler} />
                {searchData.length > 0 && (
                    <div className={style.resultBox}>
                        {searchData.map(x =>
                            <NavLink to={`/catalog/details/${x._id}`} className={style.link}>{x.name}</NavLink>
                        )}
                    </div>
                )}

            </div>
        </>
    )
}