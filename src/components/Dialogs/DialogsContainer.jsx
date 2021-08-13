import React from 'react'
import { addNewMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs_reducer"
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
	return ({
		state: state.dialogsPage,
	})
}
let mapDispatchToProps = (dispatch) => {
	return ({
		addNewMessage: () => {
			dispatch(addNewMessageActionCreator())
		},
		messageChange: (text) => {
			let action = (updateNewMessageTextActionCreator(text))
			dispatch(action)
		}
	})
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	// withAuthRedirect
)(Dialogs);