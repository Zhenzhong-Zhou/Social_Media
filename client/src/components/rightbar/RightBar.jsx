import "./righbar.css";
import {Users} from "../../templateData";
import Status from "../status/Status";

const RightBar = ({user}) => {
	const assets = process.env.REACT_APP_PUBLIC_FOLDER;
	const HomeRightBar = () => {
		return (
			<>
				<div className={"birthdayContainer"}>
					<img className={"birthdayImg"} src={`${assets}gift.png`} alt={"Birthday"}/>
					<span className={"birthdayText"}>
						<b>Paul Foster</b> and <b>3 other friends</b> have a birthday today.
					</span>
				</div>
				<img className={"rightBarAd"} src={`${assets}ad.png`} alt={"Ad"}/>
				<h4 className={"rightBarTitle"}>Online Friends</h4>
				<ul className={"rightBarFriendList"}>
					{Users.map(user => (
						<Status key={user.id} user={user}/>
					))}
				</ul>
			</>
		);
	};

	const ProfileRightBar = () => {
		return (
			<>
				<h4 className={"rightBarTitle"}>User Information</h4>
				<div className={"rightBarInfo"}>
					<div className={"rightBarInfoItem"}>
						<span className={"rightBarInfoKey"}>City: </span>
						<span className={"rightBarInfoValue"}>{user.city}</span>
					</div>
					<div className={"rightBarInfoItem"}>
						<span className={"rightBarInfoKey"}>From: </span>
						<span className={"rightBarInfoValue"}>{user.from}</span>
					</div>
					<div className={"rightBarInfoItem"}>
						<span className={"rightBarInfoKey"}>Relationship: </span>
						<span className={"rightBarInfoValue"}>
							{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}
						</span>
					</div>
				</div>
				<h4 className={"rightBarTitle"}>User Friends</h4>
				<div className={"rightBarFollowings"}>
					<div className={"rightBarFollowing"}>
						<img src={`${assets}person/1.jpeg`} alt={"Following"}  className={"rightBarFollowingImg"}/>
						<span className={"rightBarFollowingName"}>John Cart</span>
					</div>
				</div>
			</>
		);
	};

	return (
		<div className={"rightBar"}>
			<div className={"rightBarWrapper"}>
				{user ? <ProfileRightBar/> : <HomeRightBar/>}
			</div>
		</div>
	);
};

export default RightBar;