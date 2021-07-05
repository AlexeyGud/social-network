const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_NEW_MESSAGE:
			let body = state.newMessageText
			return {
				...state,
				newMessageText: '',
				messages: [...state.messages, { id: 7, message: body, }],
			}

		case UPDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.newText
			}

		default: return state
	}
}
export const addNewMessageActionCreator = () => {
	return { type: ADD_NEW_MESSAGE }
}

export const updateNewMessageTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT, newText: text
	}
}

export default dialogsReducer;