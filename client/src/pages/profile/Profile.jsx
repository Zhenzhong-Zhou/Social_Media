import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./profile.css";
import {Feed, LeftBar, RightBar, TopBar} from "../../components";
import {axiosInstance} from "../../api";

const Profile = () => {
	const assets = process.env.REACT_APP_PUBLIC_FOLDER;
	const [user, setUser] = useState({});
	const {username} = useParams();
	useEffect(() => {
		const fetchUser = async () => {
			const {data} = await axiosInstance.get(`/users?username=${username}`);
			setUser(data);
		}
		fetchUser();
	}, [username]);

	return (
		<>
			<TopBar/>
			<div className={"profile"}>
				<LeftBar/>
				<div className={"profileRight"}>
					<div className={"profileRightTop"}>
						<div className={"profileCover"}>
							<img className={"profileCoverImage"} src={user.coverPicture ? assets + user.coverPicture : assets + "person/noCover.png"} alt={"Cover"}/>
							<img className={"profileUserImage"} src={user.profilePicture ? assets + user.profilePicture : assets + "person/noAvatar.png"} alt={"Avatar"}/>
						</div>
						<div className={"profileInfo"}>
							<h4 className={"profileInfoName"}>{user.username}</h4>
							<span className={"profileInfoDesc"}>{user.description}</span>
						</div>
					</div>
					<div className={"profileRightBottom"}>
						<Feed username={username}/>
						<RightBar user={user}/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;