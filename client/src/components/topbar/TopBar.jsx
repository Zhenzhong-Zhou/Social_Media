import {useContext} from "react";
import {Chat, Notifications, Person, Search} from "@material-ui/icons";
import {Link} from "react-router-dom";
import "./topbar.css";
import {AuthContext} from "../../context/AuthContext";

const TopBar = () => {
	const {user} = useContext(AuthContext);
	const assets = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<div className={"topBarContainer"}>
			<div className={"topBarLeft"}>
				<Link to={"/"} style={{textDecoration: "none"}}>
					<span className={"logo"}>Facebook</span>
				</Link>
			</div>
			<div className={"topBarCenter"}>
				<div className={"searchBar"}>
					<Search className={"searchIcon"}/>
					<input placeholder={"Search for friend, post or video"} className={"searchInput"}/>
				</div>
			</div>
			<div className={"topBarRight"}>
				<div className={"topBarLink"}>
					<span className={"topBarLink"}>Homepage</span>
					<span className={"topBarLink"}>Timeline</span>
				</div>
				<div className={"topBarIcons"}>
					<div className={"topBarIconItem"}>
						<Person/>
						<span className={"topBarIconBadge"}>1</span>
					</div>
					<div className={"topBarIconItem"}>
						<Chat/>
						<span className={"topBarIconBadge"}>2</span>
					</div>
					<div className={"topBarIconItem"}>
						<Notifications/>
						<span className={"topBarIconBadge"}>3</span>
					</div>
				</div>
				<Link to={`/profile/${user.username}`}>
					<img src={user.profilePicture ? assets + user.profilePicture : assets + "person/noAvatar.png"} alt={"TopBar"} className={"topBarImg"}/>
				</Link>
			</div>
		</div>
	);
};

export default TopBar;