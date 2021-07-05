import s from './Settings.module.css';

const Settings = (props) => {
	return (
		<div>
			Settings
			<div className={s.preloader}>
				<div className={s.spinner}></div>
			</div>
		</div>

	)
}

export default Settings;