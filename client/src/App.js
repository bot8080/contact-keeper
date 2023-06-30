import './App.css';
import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/contactState'
import AuthState from './context/auth/authState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => {
	return (
		<AuthState>
			<ContactState>
				<Router>
					<Navbar />
					<>
						<div className='container'>
							<Routes>
								<Route exact path="/" Component={Home} />
								<Route exact path="/about" Component={About} />
								<Route exact path="/register" Component={Register} />

								<Route exact path="/login" Component={Login} />
							</Routes>
						</div>
					</>
				</Router>
			</ContactState>
		</AuthState>
	);
}

export default App;
