import style from './RecentlyAdded.module.css';

export const RecentlyAdded = ({
    character
}) => {

    return (
        <div className={style.container}>
            <div className={style.information}>
                <h1>Name: {character.name}</h1>
                <div className={style.imageContainer}>
                    <h1>das</h1>
                    {/* <img src={character.imgUrl} alt="Loading..." /> */}
                </div>
            </div>
        </div>
    )
}   