import {useEffect, useState} from "react";
import "./profile.css";
import {Feed, LeftBar, RightBar, TopBar} from "../../components";
import {axiosInstance} from "../../api";

const Profile = () => {
	const assets = process.env.REACT_APP_PUBLIC_FOLDER;
	const [user, setUser] = useState({});
	useEffect(() => {
		const fetchUser = async () => {
			const {data} = await axiosInstance.get(`/users?username=Andy`);
			console.log(user.description)
			console.log("1212")
			setUser(data);
		}
		fetchUser();
	}, []);

	return (
		<>
			<TopBar/>
			<div className={"profile"}>
				<LeftBar/>
				<div className={"profileRight"}>
					<div className={"profileRightTop"}>
						<div className={"profileCover"}>
							<img className={"profileCoverImage"} src={`${assets}post/3.jpeg`} alt={"Cover"}/>
							<img className={"profileUserImage"} src={`${assets}person/7.jpeg`} alt={"Cover"}/>
						</div>
						<div className={"profileInfo"}>
							<h4 className={"profileInfoName"}>{user.username}</h4>
							<span className={"profileInfoDesc"}>{user.description}</span>
						</div>
					</div>
					<div className={"profileRightBottom"}>
						<Feed username={"Andy"}/>
						<RightBar profile/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;