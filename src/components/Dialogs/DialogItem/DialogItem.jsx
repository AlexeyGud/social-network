import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

class DialogItem extends React.Component {
	path = () => '/dialogs/' + this.props.id;
	render = () => {
		return (
			<div className={s.dialog}>
				<img src="https://static.thenounproject.com/png/363640-200.png" />
				<NavLink to={this.path} activeClassName={s.active}>{this.props.name}</NavLink>
			</div>
		)
	}
}

export default DialogItem;