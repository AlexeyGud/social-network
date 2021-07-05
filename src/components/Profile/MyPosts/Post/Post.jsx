import React from 'react'
import s from './Post.module.css';

class Post extends React.Component {
	render = () => {
		return (
			<div className={s.item}>
				<img src="https://static.dw.com/image/5011737_404.jpg" />
				{this.props.message}
				<div>
					<span>like</span> {this.props.likesCount}
				</div>
			</div>
		)
	}
}

export default Post;