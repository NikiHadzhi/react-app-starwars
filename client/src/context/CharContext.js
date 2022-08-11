import { createContext, useEffect, useState } from "react";
import * as request from '../services/charService';


export const CharContext = createContext();

export const CharProvider = ({
    children
}) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        request.getAll()
        .then(data => setCharacters(data));
    }, []);

    const addCharacters = (characters) => {
        setCharacters(characters);
    }

    const selectCharacter = (charId) => {
        return characters.find(x => x._id === charId) || {};
    };

    return (
        <CharContext.Provider value={{
            characters,
            addCharacters,
            selectCharacter
        }}>
            {children}
        </CharContext.Provider>
    )
}