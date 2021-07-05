import { usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_PROFILE = 'SET_PROFILE'

let initialState = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 5 },
		{ id: 2, message: 'It\'s my first post', likesCount: 12 },
	],
	newPostText: 'it-kamasutra.com',
	profile: null,
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let body = state.newPostText
			return {
				...state,
				newPostText: '',
				posts: [...state.posts, { id: 5, message: body, likesCount: 0, }]
			}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText,
			}
		case SET_PROFILE:
			return {
				...state, profile: action.profile
			}
		default: return state
	}
}

export const addPostActionCreator = () => {
	return { type: ADD_POST }
}

export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT, newText: text
	}
}
export const setProfile = (profile) => {
	return { type: SET_PROFILE, profile }
}

export const getProfile = (userId) => {
	return (dispatch) => {
		usersAPI.getProfile(userId)
			.then(data => {
				dispatch(setProfile(data))
			})
	}
}

export default profileReducer;