import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
	if (!props.profile) {
		return (
			<Preloader />
		)
	}
	return (
		<div>
			{/* <div>
				<img src='https://lingua-airlines.ru/wp-content/uploads/2017/01/annual-travel-insurance-plan-at-directasia.jpg' alt='#' />
			</div> */}
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} alt='#' />
				<ProfileStatus status={"Hello my friends"} />
				{/* <span>{props.profile.aboutMe}</span> */}
			</div>
		</div>
	)
}

export default ProfileInfo;