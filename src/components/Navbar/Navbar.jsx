import { NavLink } from 'react-router-dom';
import Friends from './../Friends/Friends';
import s from './Navbar.module.css';

const Navbar = (props) => {
	return (
		<nav className={s.nav}>
			<div>
				<div className={s.item}>
					<NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
				</div>
				<div className={`${s.item} ${s.active}`}>
					<NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/news' activeClassName={s.active}>News</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/music' activeClassName={s.active}>Music</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/users' activeClassName={s.active}>Users</NavLink>
				</div>
			</div>
			<Friends state={props.state} />
		</nav>
	);
};

export default Navbar;