import s from './Friend.module.css';


const Friend = (props) => {
	return (
		<a href='#' className={s.friends__item}>
			<div className={s.friends__item_avatar}>
				<img src="https://static.thenounproject.com/png/363640-200.png" />
			</div>
			<h4 className={s.friends__item_title}>{props.name}</h4>
		</a>
	)
}

export default Friend;