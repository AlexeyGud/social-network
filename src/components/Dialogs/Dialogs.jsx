import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { Redirect } from 'react-router-dom';

class Dialogs extends React.Component {
	dialogsElements = () => this.props.state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)

	messagesElements = () => this.props.state.messages.map(m => <Message message={m.message} key={m.id} />)

	onAddNewMessage = () => {
		this.props.addNewMessage()
	}

	onMessageChange = (e) => {
		this.props.messageChange(e.target.value)
	}

	render = () => {
		if (!this.props.isAuth) return <Redirect to={'/login'} />
		return (
			<div className={s.dialogs} >
				<div className={s.dialogsItems}>
					{this.dialogsElements()}
				</div>
				<div className={s.messages}>
					{this.messagesElements()}
					<div className={s.message}>
						<div className={s.textarea__container}>
							<textarea onChange={this.onMessageChange} placeholder='Enter a message!' value={this.props.state.newMessageText} />
							<button onClick={this.onAddNewMessage}>Send Message</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Dialogs;