import "./friend.css";

const Friend = () => {
	return (
		<li className={"leftBarFiend"}>
			<img className={"leftBarFriendImg"} src={"/assets/person/2.jpeg"} alt={"LeftBar Friend"}/>
			<span className={"leftBarFriendName"}>Steven Jobs</span>
		</li>
	);
};

export default Friend;