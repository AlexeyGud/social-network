import s from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
	let friendsElements = props.state.sidebar.friends.map(f => <Friend name={f.name} key={f.id} id={f.id} />)
	return (
		<div className={s.friends}>
			<h3 className={s.friends__title}>Friends</h3>
			<div className={s.friends__items}>
				{friendsElements}
			</div>
		</div>
	)
}

export default Friends;