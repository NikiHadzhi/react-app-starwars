import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './context/AuthContext';
import { useState } from 'react';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Create } from './components/Create/Create';
import { Characters } from './components/Catalog/Characters';

import './App.css';
import { Logout } from './components/Logout/Logout';
import { CharDetails } from './components/CharDetails/CharDetails';
import { CharContext } from './context/CharContext';
import { Home } from './components/Home/Home';
import { Edit } from './components/Edit/Edit';
import { Delete } from './components/Delete/Delete';

function App() {
	const [auth, setAuth] = useState({});
	const [characters, setCharacters] = useState([]);

	const addCharacters = (characters) => {
		setCharacters(characters);
	}

	const userLogin = (authData) => {
		setAuth(authData);
	}

	const userLogout = () => {
		localStorage.removeItem('user');
		setAuth({});
	}

	return (
		<AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
			<div className="App">
				<Header />

				<CharContext.Provider value={{characters, addCharacters}}>
					<div className="main">
						<Routes>
							<Route path='/' element={<Home/>} />
							<Route path='/create' element={<Create />} />
							<Route path='/register' element={<Register />} />
							<Route path='/login' element={<Login />} />
							<Route path='/logout' element={<Logout />} />
							<Route path='/catalog' element={<Characters />} />
							<Route path='/catalog/details/:charId' element={<CharDetails />} />
							<Route path='/catalog/details/edit/:charId' element={<Edit />} />
							<Route path='/catalog/details/delete/:charId' element={<Delete />} />
						</Routes>
					</div>
				</CharContext.Provider>

				<Footer />
			</div>
		</AuthContext.Provider>
	);
}

export default App;
