import "./friend.css";

const Friend = ({user}) => {
	return (
		<li className={"leftBarFiend"}>
			<img className={"leftBarFriendImg"} src={user.profilePicture} alt={"LeftBar Friend"}/>
			<span className={"leftBarFriendName"}>{user.username}</span>
		</li>
	);
};

export default Friend;