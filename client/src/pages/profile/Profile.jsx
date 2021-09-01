import "./profile.css";
import {Feed, LeftBar, RightBar, TopBar} from "../../components";

const Profile = () => {
	const assets = process.env.REACT_APP_PUBLIC_FOLDER;
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
							<h4 className={"profileInfoName"}>Andy</h4>
							<span className={"profileInfoDesc"}>Description</span>
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