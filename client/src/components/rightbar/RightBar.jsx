import "./righbar.css";
import {Users} from "../../templateData";
import Status from "../status/Status";

const RightBar = () => {
	return (
		<div className={"rightBar"}>
			<div className={"rightBarWrapper"}>
				<div className={"birthdayContainer"}>
					<img className={"birthdayImg"} src={"/assets/gift.png"} alt={"Birthday"}/>
					<span className={"birthdayText"}>
						<b>Paul Foster</b> and <b>3 other friends</b> have a birthday today.
					</span>
				</div>
				<img className={"rightBarAd"} src={"/assets/ad.png"} alt={"Ad"}/>
				<h4 className={"rightBarTitle"}>Online Friends</h4>
				<ul className={"rightBarFriendList"}>
					{Users.map(user => (
						<Status key={user.id} user={user}/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RightBar;