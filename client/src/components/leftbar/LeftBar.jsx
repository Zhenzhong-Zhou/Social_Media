import "./leftbar.css";
import {Bookmarks, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline} from "@material-ui/icons";
import {Users} from "../../templateData";
import Friend from "../friend/Friend";

const LeftBar = () => {
	return (
		<div className={"leftBar"}>
			<div className={"leftBarWrapper"}>
				<ul className={"leftBarList"}>
					<li className={"leftBarListItem"}>
						<RssFeed className={"leftBarIcon"}/>
						<span className={"leftBarListItemText"}>Feed</span>
					</li>
					<li className={"leftBarListItem"}>
						<Chat className={"leftBarIcon"}/>
						<span className={"leftBarListItemText"}>Chats</span>
					</li>
					<li className={"leftBarListItem"}>
						<PlayCircleFilledOutlined className={"leftBarIcon"}/>
						<span className={"leftBarListItemText"}>Videos</span>
					</li>
					<li className={"leftBarListItem"}>
						<Group className={"leftBarIcon"}/>
						<span className={"leftBarListItemText"}>Group</span>
					</li>
					<li className={"leftBarListItem"}>
						<Bookmarks className={"leftBarIcon"}/>
						<span className={"leftBarListItemText"}>Bookmarks</span>
					</li>
					<li className={"leftBarListItem"}>
						<HelpOutline className={"leftBarIcon"}/>
						<span className={"leftBarListItemText"}>Questions</span>
					</li>
					<li className={"leftBarListItem"}>
						<WorkOutline className={"leftBarIcon"}/>
						<span className={"leftBarListItemText"}>Jobs</span>
					</li>
					<li className={"leftBarListItem"}>
						<Event className={"leftBarIcon"}/>
						<span className={"leftBarListItemText"}>Events</span>
					</li>
					<li className={"leftBarListItem"}>
						<School className={"leftBarIcon"}/>
						<span className={"leftBarListItemText"}>Courses</span>
					</li>
				</ul>
				<button className={"leftBarButton"}>Show More</button>
				<hr className={"leftBarHr"}/>
				<ul className={"leftBarFriendList"}>
					{Users.map((user) => (
						<Friend key={user.id} user={user}/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default LeftBar;