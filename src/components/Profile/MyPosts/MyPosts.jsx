import React from 'react'
import Post from './Post/Post';
import s from './MyPosts.module.css';

class MyPosts extends React.Component {
	postsElements = () => this.props.posts.map(p => <Post message={p.message} id={p.id} key={p.id} likesCount={p.likesCount} />)

	onAddPost = () => {
		this.props.addPost()
	}

	onPostChange = (e) => {
		this.props.updateNewPostText(e.target.value)
	}
	render = () => {

		return (
			<div className={s.postsBlock}>
				<h3>
					My posts
			</h3>
				<div>
					<div>
						<textarea onChange={this.onPostChange}
							value={this.props.newPostText} />
					</div>
					<div>
						<button onClick={this.onAddPost}>Add post</button>
					</div>
				</div>
				<div className={s.posts}>
					{this.postsElements()}
				</div>
			</div>
		)
	}
}

export default MyPosts;