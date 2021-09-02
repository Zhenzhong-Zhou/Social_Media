import {useEffect, useState} from "react";
import "./righbar.css";
import Status from "../status/Status";
import {axiosInstance} from "../../api";
import HomeRightBar from "./homeRightBar/HomeRightBar";
import ProfileRightBar from "./profileRightBar/ProfileRightBar";

const RightBar = ({user}) => {
	// const assets = process.env.REACT_APP_PUBLIC_FOLDER;
	// const [friends, serFriends] = useState([]);
	//
	// useEffect(() => {
	// 	const fetchFriends = async () => {
	// 		try {
	// 			const {friendList} = await axiosInstance.get(`/users/friends/${user._id}`);
	// 			serFriends(friendList);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	// 	fetchFriends();
	// }, [user._id]);

	// const HomeRightBar = () => {
	// 	return (
	// 		<>
	// 			<div className={"birthdayContainer"}>
	// 				<img className={"birthdayImg"} src={`${assets}gift.png`} alt={"Birthday"}/>
	// 				<span className={"birthdayText"}>
	// 					<b>Paul Foster</b> and <b>3 other friends</b> have a birthday today.
	// 				</span>
	// 			</div>
	// 			<img className={"rightBarAd"} src={`${assets}ad.png`} alt={"Ad"}/>
	// 			<h4 className={"rightBarTitle"}>Online Friends</h4>
	// 			<ul className={"rightBarFriendList"}>
	// 				{/*{Users.map(user => (*/}
	// 				{/*	<Status key={user.id} user={user}/>*/}
	// 				{/*))}*/}
	// 			</ul>
	// 		</>
	// 	);
	// };

	// const ProfileRightBar = () => {
	// 	return (
	// 		<>
	// 			<h4 className={"rightBarTitle"}>User Information</h4>
	// 			<div className={"rightBarInfo"}>
	// 				<div className={"rightBarInfoItem"}>
	// 					<span className={"rightBarInfoKey"}>City: </span>
	// 					<span className={"rightBarInfoValue"}>{user.city}</span>
	// 				</div>
	// 				<div className={"rightBarInfoItem"}>
	// 					<span className={"rightBarInfoKey"}>From: </span>
	// 					<span className={"rightBarInfoValue"}>{user.from}</span>
	// 				</div>
	// 				<div className={"rightBarInfoItem"}>
	// 					<span className={"rightBarInfoKey"}>Relationship: </span>
	// 					<span className={"rightBarInfoValue"}>
	// 						{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}
	// 					</span>
	// 				</div>
	// 			</div>
	// 			<h4 className={"rightBarTitle"}>User Friends</h4>
	// 			<div className={"rightBarFollowings"}>
	// 				{friends.map(friend => (
	// 					<div className={"rightBarFollowing"}>
	// 						<img src={friend.profilePicture ? assets + friend.profilePicture : assets + "person/noAvatar.png"} alt={"Followings Avatar"}  className={"rightBarFollowingImg"}/>
	// 						<span className={"rightBarFollowingName"}>{friend.username}</span>
	// 					</div>
	// 				))}
	// 			</div>
	// 		</>
	// 	);
	// };

	return (
		<div className={"rightBar"}>
			<div className={"rightBarWrapper"}>
				{user ? <ProfileRightBar user={user}/> : <HomeRightBar/>}
			</div>
		</div>
	);
};

export default RightBar;