import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Add, Remove} from "@material-ui/icons";
import {axiosInstance} from "../../../api";
import {AuthContext} from "../../../context/AuthContext";
import {FOLLOW, UNFOLLOW} from "../../../constants/actionsTypes";

const ProfileRightBar = ({user}) => {
	const assets = process.env.REACT_APP_PUBLIC_FOLDER;
	const [friends, serFriends] = useState([]);
	const {user: currenUser, dispatch} = useContext(AuthContext);
	const [followed, setFollowed] = useState(currenUser.followings.includes(user?.id));

	useEffect(() => {
		const fetchFriends = async () => {
			try {
				const {data} = await axiosInstance.get(`/users/friends/${user._id}`);
				serFriends(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchFriends();
	}, [user._id]);

	useEffect(() => {
		setFollowed(currenUser.followings.includes(user?.id));
	}, [currenUser, user.id]);


	const handleClick = async () => {
		try {
			if (followed) {
				await axiosInstance.put(`/users/${user._id}/unfollow`, {userId: currenUser._id});
				dispatch({type: UNFOLLOW, payload: user._id});
			} else {
				await axiosInstance.put(`/users/${user._id}/follow`, {userId: currenUser._id});
				dispatch({type: FOLLOW, payload: user._id});
			}
		} catch (error) {
			console.log(error);
		}
		setFollowed(!followed);
	};

	return (
		<>
			{user.username !== currenUser.username && (
				<button className={"rightBarFollowButton"} onClick={handleClick}>
					{followed ? "Unfollow" : "Follow"}
					{followed ? <Remove/> : <Add/>}
				</button>
			)}
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
				{friends.map(friend => (
					<Link to={`/profile/${friend.username}`} style={{textDecoration: "none"}}>
						<div className={"rightBarFollowing"}>
							<img src={friend.profilePicture ? assets + friend.profilePicture : assets + "person/noAvatar.png"} alt={"Followings Avatar"}  className={"rightBarFollowingImg"}/>
							<span className={"rightBarFollowingName"}>{friend.username}</span>
						</div>
					</Link>
				))}
			</div>
		</>
	);
};

export default ProfileRightBar;