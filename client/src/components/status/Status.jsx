import "./status.css";

const Status = ({user}) => {
	const assets = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<li className={"rightBarFriend"}>
			<div className={"rightBarProfileImgContainer"}>
				<img className={"rightBarProfileImg"} src={assets + user.profilePicture} alt={"Profile"}/>
				<span className={"rightBarOnline"}></span>
			</div>
			<span className={"rightBarUsername"}>{user.username}</span>
		</li>
	);
};

export default Status;