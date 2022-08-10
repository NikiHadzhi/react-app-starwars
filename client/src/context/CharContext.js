import { createContext, useState } from "react";

export const CharContext = createContext();

export const CharProvider = ({
    children
}) => {
    const [characters, setCharacters] = useState([]);

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