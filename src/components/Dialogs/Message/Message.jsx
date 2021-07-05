import React from 'react';
import s from './Message.module.css';

class Message extends React.Component {
	render = () => {
		return (
			<div className={s.dialog}>
				<div>
					{this.props.message}
				</div>
			</div>
		)
	}
}

export default Message;