import "./friend.css";

const Friend = ({user}) => {
	const assets = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<li className={"leftBarFiend"}>
			<img className={"leftBarFriendImg"} src={assets + user.profilePicture} alt={"LeftBar Friend"}/>
			<span>{user.username}</span>
		</li>
	);
};

export default Friend;