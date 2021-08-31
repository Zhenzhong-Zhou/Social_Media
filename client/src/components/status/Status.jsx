import "./status.css";

const Status = ({user}) => {
	return (
		<li className={"rightBarFriend"}>
			<div className={"rightBarProfileImgContainer"}>
				<img className={"rightBarProfileImg"} src={user.profilePicture} alt={"Profile"}/>
				<span className={"rightBarOnline"}></span>
			</div>
			<span className={"rightBarUsername"}>{user.username}</span>
		</li>
	);
};

export default Status;