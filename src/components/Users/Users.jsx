import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'

const Users = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

	let pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div>
			<div>
				{pages.map(p => {
					return <span className={props.currentPage === p && s.selected_page}
						onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
				})}
			</div>
			{
				props.users.map(u => <div key={u.id} className='user'>
					<div className='user__face'>
						<div className={s.user__avatar}>
							<NavLink to={'/profile/' + u.id}>
								<img src={u.photos.small != null ? u.photos.small : userPhoto} />
							</NavLink>
						</div>
						<div className='user__button'>
							{u.followed ?
								<button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
									props.unfollow(u.id)
								}}>unfollow</button> :
								<button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
									props.follow(u.id)
								}}>follow</button>}
						</div>
					</div>
					<div className='user__block'>
						<div className='user__items'>
							<div className='user__name'>{u.name}</div>
							<div className='user__status'>{u.status}</div>
						</div>
						<div className='user__location'>
							<div className='user__country'>{'u.location.country'}</div>
							<div className='user__city'>{'u.location.city'}</div>
						</div>
					</div>
				</div>)
			}
		</div >
	)
}


export default Users;