import { createContext, useState} from "react";

export const CharContext = createContext();

export const CharProvider = ({
    children
}) => {
	const [characters, setCharacters] = useState([]);

	const addCharacters = (characters) => {
		setCharacters(characters);
	}

    return(
        <CharContext.Provider value ={{characters, addCharacters}}>
            {children}
        </CharContext.Provider>
    )
}