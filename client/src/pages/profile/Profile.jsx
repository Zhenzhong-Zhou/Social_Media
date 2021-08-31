import "./profile.css";
import {Feed, LeftBar, RightBar, TopBar} from "../../components";

const Profile = () => {
	return (
		<>
			<TopBar/>
			<div className={"profile"}>
				<LeftBar/>
				<div className={"profileRight"}>
					<div className={"profileRightTop"}>
						hello world
					</div>
					<div className={"profileRightBottom"}>
						<Feed/>
						<RightBar/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;