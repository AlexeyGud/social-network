import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import sidebarReducer from './sidebar_reducer';


let store = {
	_state: {
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Dimych' },
				{ id: 2, name: 'Andrey' },
				{ id: 3, name: 'Sveta' },
				{ id: 4, name: 'Sasha' },
				{ id: 5, name: 'Victor' },
				{ id: 6, name: 'Valera' },
			],
			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'How is your IT-Kamasutra?' },
				{ id: 3, message: 'Yo' },
				{ id: 4, message: 'Yo-Yo' },
				{ id: 5, message: 'Let\'s go!' },
				{ id: 6, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fugit.' },
			],
			newMessageText: ''
		},
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you?', likesCount: 5 },
				{ id: 2, message: 'It\'s my first post', likesCount: 12 },
			],
			newPostText: 'it-kamasutra.com'
		},
		sidebar: {
			friends: [
				{ id: 1, name: 'Dimych' },
				{ id: 2, name: 'Andrey' },
				{ id: 3, name: 'Sveta' },
			]
		}
	},
	_callSubscriber() {
		console.log('state changed')
	},
	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._callSubscriber(this.getState());
	}
}

// window.store = store;

export default store;