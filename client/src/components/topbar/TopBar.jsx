import {Chat, Notifications, Person, Search} from "@material-ui/icons";
import "./topbar.css";

const TopBar = () => {
	return (
		<div className={"topBarContainer"}>
			<div className={"topBarLeft"}>
				<span className={"logo"}>Facebook</span>
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
				<img src={"/assets/person/1.jpeg"} alt={"TopBar"} className={"topBarImg"}/>
			</div>
		</div>
	);
};

export default TopBar;