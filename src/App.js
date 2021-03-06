import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import { Route } from "react-router-dom"
import React from 'react'
import LoginPage from './components/Login/Login'

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<Navbar state={props.store.getState()} />
			<div className='app-wrapper-content'>
				<Route path='/dialogs' render={() => <DialogsContainer />} />
				<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
				{/* <Route path='/news' render={() => <News />} />
				<Route path='/music' render={() => <Music />} /> */}
				<Route path='/settings' render={() => <Settings />} />
				<Route path='/users' render={() => <UsersContainer />} />
				<Route path='/login' render={() => <LoginPage />} />
			</div>
		</div >
	);
}

export default App;