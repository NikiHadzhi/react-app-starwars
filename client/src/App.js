import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { CharProvider } from './context/CharContext';

import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Create } from './components/Create/Create';
import { Edit } from './components/Edit/Edit';
import { Delete } from './components/Delete/Delete';
import { Characters } from './components/Catalog/Characters';
import { Logout } from './components/Logout/Logout';
import { CharDetails } from './components/CharDetails/CharDetails';

import { PublicRoute } from './components/Guards/PublicRoute';
import { PrivateRoute } from './components/Guards/PrivateRoute';

import './App.css';

function App() {
	return (
		<AuthProvider>
			<div className="App">
				<Header />

				<CharProvider>
					<div className="main">
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/catalog' element={<Characters />} />
							<Route path='/catalog/details/:charId' element={<CharDetails />} />
							<Route element={<PublicRoute />}>
								<Route path='/login' element={<Login />} />
								<Route path='/register' element={<Register />} />
							</Route>
							<Route element={<PrivateRoute />}>
								<Route path='/create' element={<Create />} />
								<Route path='/logout' element={<Logout />} />
								<Route path='/catalog/details/edit/:charId' element={<Edit />} />
								<Route path='/catalog/details/delete/:charId' element={<Delete />} />
							</Route>
						</Routes>
					</div>
				</CharProvider>

				<Footer />
			</div>
		</AuthProvider>
	);
}

export default App;
